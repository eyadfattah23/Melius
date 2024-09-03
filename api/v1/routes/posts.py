from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostLike, PostComment
from models import storage
from flasgger.utils import swag_from
from flask_jwt_extended import jwt_required, get_jwt_identity

posts_bp = Blueprint('posts', __name__)

@swag_from('documentation/post/get_posts.yml')
@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    """ Retrieves all posts with pagination """
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    user_id = request.args.get('user_id', '', type=str)

    # Get the paginated posts directly from storage
    posts = list(storage.all(Post, page=page, page_size=per_page).values())

    # Calculate total number of posts  
    total_posts = storage.count(Post)
    total_pages = (total_posts + per_page - 1) // per_page if per_page > 0 else 1

    # Prepare the paginated response
    posts_list = []
    for post in posts:
        post_dict = post.to_dict().copy()
        
        # Adding like and comment counts
        likes_count = storage.count(PostLike, post_id=post.id)
        comments_count = storage.count(PostComment, post_id=post.id)
        
        post_dict['likes_count'] = likes_count
        post_dict['comments_count'] = comments_count

        if user_id:
            like = storage.getSession().query(PostLike).filter_by(post_id=post.id, user_id=user_id).first()
            post_dict['liked'] = like is not None

        posts_list.append(post_dict)

    # Create the response with pagination metadata
    response = {
        'total_posts': total_posts,
        'page': page,
        'per_page': per_page,
        'total_pages': total_pages,
        'posts': posts_list
    }

    return jsonify(response)


@posts_bp.route('/posts2', methods=['GET'])
@swag_from('documentation/jwt/post/get_posts.yml')
@jwt_required()
def get_posts2():
    """ Retrieves all posts with pagination and user authentication """
    user_id = get_jwt_identity()
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)

    # Get the paginated posts directly from storage
    posts = list(storage.all(Post, page=page, page_size=per_page).values())

    # Calculate total number of posts  
    total_posts = storage.count(Post)
    total_pages = (total_posts + per_page - 1) // per_page if per_page > 0 else 1

    # Prepare the paginated response
    posts_list = []
    for post in posts:
        post_dict = post.to_dict().copy()
        
        # Adding like and comment counts
        likes_count = storage.count(PostLike, post_id=post.id)
        comments_count = storage.count(PostComment, post_id=post.id)
        
        post_dict['likes_count'] = likes_count
        post_dict['comments_count'] = comments_count

        if user_id:
            like = storage.getSession().query(PostLike).filter_by(post_id=post.id, user_id=user_id).first()
            post_dict['liked'] = like is not None

        posts_list.append(post_dict)

    # Create the response with pagination metadata
    response = {
        'total_posts': total_posts,
        'page': page,
        'per_page': per_page,
        'total_pages': total_pages,
        'posts': posts_list
    }

    return jsonify(response)

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
    return make_response({}, 201)

@swag_from('documentation/post/get_post.yml')
@posts_bp.route('/posts/<post_id>', methods=['GET'])
def get_post(post_id):
    """ Retrieves a specific post """
    post = storage.get(Post, post_id)
    if not post:
        abort(404, description="Post not found")

    return jsonify(post.to_dict())

@swag_from('documentation/post/update_post.yml')
@posts_bp.route('/posts/<post_id>', methods=['PUT'])
def update_post(post_id):
    """ Updates a post """
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

@swag_from('documentation/post/delete_post.yml')
@posts_bp.route('/posts/<post_id>', methods=['DELETE'])
def delete_post(post_id):
    """ Deletes a post and all associated data """
    post = storage.get(Post, post_id)
    if not post:
        abort(404, description="Post not found")

    storage.delete(post)
    storage.save()

    return jsonify({"message": "Post deleted"}), 204

@posts_bp.route('/posts/<post_id>/comments', methods=['GET'])
def get_post_comments(post_id):
    """ Retrieves all comments for a specific post """
    post = storage.get(Post, post_id)
    if not post:
        abort(404, description="Post not found")

    return jsonify([comment.to_dict() for comment in post.comments])
