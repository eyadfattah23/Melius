from flask import Blueprint, jsonify, request, make_response, abort
from models.post import *
from models import storage
from flasgger.utils import swag_from
from flask_jwt_extended import jwt_required, get_jwt_identity

posts_bp = Blueprint('posts', __name__)


@swag_from('documentation/post/get_posts.yml')
@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    """route to get all posts paginated"""
    user_id = request.args.get('user_id', '', type=str)
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)

    posts = list(storage.all(Post, page=page, page_size=per_page).values())

    total_posts = storage.count(Post)
    # Paginate the posts
    start = (page - 1) * per_page
    end = start + per_page
    paginated_posts = posts[start:end]

    # Prepare the paginated response
    posts_list = []
    for post in paginated_posts:
        post_dict = post.to_dict().copy()

        likes_count = storage.count(PostLike, post_id=post.id)
        comments_count = storage.count(PostComment, post_id=post.id)

        post_dict['likes_count'] = likes_count
        post_dict['comments_count'] = comments_count

        if user_id:
            like = storage.getSession().query(PostLike).filter_by(
                post_id=post.id, user_id=user_id).first()
            if like:
                post_dict['liked'] = True
            else:
                post_dict['liked'] = False

        posts_list.append(post_dict)

    response = {
        'total_posts': total_posts,
        'page': page,
        'per_page': per_page,
        'total_pages': (total_posts + per_page - 1) // per_page,
        'posts': posts_list
    }
    return jsonify(response)


@swag_from('documentation/post/get_posts.yml')
@posts_bp.route('/posts2', methods=['GET'])
@jwt_required()
def get_posts2():
    """route to get all posts paginated by token"""
    user_id = get_jwt_identity()
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)

    posts = list(storage.all(Post, page=page, page_size=per_page).values())

    total_posts = storage.count(Post)
    total_pages = (total_posts + per_page - 1) // per_page

    posts_list = []
    for post in posts:
        post_dict = post.to_dict().copy()

        likes_count = storage.count(PostLike, post_id=post.id)
        comments_count = storage.count(PostComment, post_id=post.id)

        post_dict['likes_count'] = likes_count
        post_dict['comments_count'] = comments_count

        if user_id:
            like = storage.getSession().query(PostLike).filter_by(
                post_id=post.id, user_id=user_id).first()
            post_dict['liked'] = like is not None

        posts_list.append(post_dict)

    response = {
        'total_posts': total_posts,
        'page': page,
        'per_page': per_page,
        'total_pages': total_pages,
        'posts': posts_list
    }
    return jsonify(response)

# Creates a new post


@swag_from('documentation/post/create_post.yml')
@posts_bp.route('/posts', methods=['POST'])
def create_post():
    """
    Creates a post
    """
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'title' not in request.get_json():
        abort(400, description="Missing title")
    if 'text' not in request.get_json():
        abort(400, description="Missing content")
    if 'user_id' not in request.get_json():
        abort(400, description="Missing user_id")

    data = request.get_json()
    instance = Post(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)

# Retrieves specific post info


@swag_from('documentation/post/get_post.yml')
@posts_bp.route('/posts/<post_id>', methods=['GET'])
def get_post(post_id):
    """ Retrieves an user """
    post = storage.get(Post, post_id)
    if not post:
        abort(404, description="Post not found")

    return jsonify(post.to_dict())

# Updates post content


@swag_from('documentation/post/update_post.yml')
@posts_bp.route('/posts/<post_id>', methods=['PUT'])
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    """
    Updates a user
    """
    post = storage.get(Post, post_id)

    if not post:
        abort(404, description="Post not found")

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(post, key, value)
    storage.save()
    return make_response(jsonify(post.to_dict()), 200)

# Deletes a post and all associated data


@swag_from('documentation/post/delete_post.yml')
@posts_bp.route('/posts/<post_id>', methods=['DELETE'])
def delete_post(post_id):
    ''' Deletes a post and all associated data '''
    post = storage.get(Post, post_id)

    if not post:
        abort(404, description="Post not found")

    storage.delete(post)
    storage.save()

    return jsonify({"message": "Post deleted"}), 204


# Retrieves all comments for a specific post
@posts_bp.route('/posts/<post_id>/comments', methods=['GET'])
def get_post_comments(post_id):
    post = storage.get(Post, post_id)
    return jsonify([comment.to_dict() for comment in post.comments])
