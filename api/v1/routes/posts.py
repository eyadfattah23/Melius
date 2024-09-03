from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostLike
from models import storage
from flasgger.utils import swag_from

posts_bp = Blueprint('posts', __name__)

@swag_from('documentation/post/get_posts.yml')
@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    """ Retrieves all posts with pagination """
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)

    posts = storage.all(Post, page=page, page_size=per_page).values()

    # Calculate total number of posts  
    total_posts = storage.count(Post)

    # Prepare the paginated response
    posts_list = []
    for post in posts:
        post_dict = post.to_dict().copy()
        likes_count = storage.count(PostLike, post_id=post.id) 
        post_dict['likes_count'] = likes_count
        posts_list.append(post_dict)

    # Correct the total_pages calculation
    total_pages = (total_posts + per_page - 1) // per_page if per_page > 0 else 1

    # Create the response with pagination metadata
    response = {
        'total_posts': posts_list,
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
    post =  storage.get(Post, post_id)
    return jsonify([comment.to_dict() for comment in post.comments])