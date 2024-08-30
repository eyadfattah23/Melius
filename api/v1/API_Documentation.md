# API Documentation

## Users

### Get All Users

**Endpoint:** `GET /users`

**Curl Command:**

```bash
curl -X GET http://127.0.0.1:5050/api/v1/users
```

### Create a New User

**Endpoint:** `POST /api/v1/users`

```bash
curl -X POST http://127.0.0.1:5050/api/v1/users \
-H "Content-Type: application/json" \
-d '{"email": "user@example.com", "password": "secure#Password1", "username": "JohnCina"}'
```

### Get Specific User Details

**Endpoint:** `GET /api/v1/users/<user_id>`

```bash
curl -X GET http://127.0.0.1:5050/api/v1/users/<user_id>
curl -X GET http://127.0.0.1:5050/api/v1/users/3c4d5e6f7g8h
```

### Update User Information

**Endpoint:** `PUT /api/v1/users/<user_id>`

```bash
curl -X PUT http://127.0.0.1:5050/api/v1/users/<user_id> \
-H "Content-Type: application/json" \
-d '{"username": "Smith"}'
```

### Delete a User

**Endpoint:** `DELETE /api/v1/users/<user_id>`

```bash
curl -X DELETE http://127.0.0.1:5050/api/v1/users/<user_id>
```

## Posts

### Get All Posts

**Endpoint:** `GET /api/v1/posts`

```bash
curl -X GET http://127.0.0.1:5050/api/v1/posts
```

### Create a New Post

**Endpoint:** `POST /api/v1/posts`

```bash
curl -X POST http://127.0.0.1:5050/api/v1/posts \
-H "Content-Type: application/json" \
-d '{
"user_id": "user123",
"title": "Sample Post Title",
"text": "This is the content of the post.",
}'
```

### Get Specific Post Details

**Endpoint:** `GET /api/v1/posts/<post_id>`

```bash
curl -X GET http://127.0.0.1:5050/api/v1/posts/<post_id>
```

### Update Post Information

**Endpoint:** `PUT /api/v1/posts/<post_id>`

```bash
curl -X PUT http://127.0.0.1:5050/api/v1/posts/<post_id> \
-H "Content-Type: application/json" \
-d '{
"title": "Updated Post Title",
"text": "This is the updated content of the post."
}'
```

### Delete a Post

**Endpoint:** `DELETE /api/v1/posts/<post_id>`

```bash
curl -X DELETE http://127.0.0.1:5050/api/v1/posts/<post_id>
```

## Posts Comments

### Retrieve Comments for a Post

**Endpoint:** `GET /api/v1/posts/<post_id>/comments`

```bash

```

### Create a Comment on a Post

**Endpoint:** `POST /api/v1/posts/<post_id>/comments`

```bash
curl -X POST http://127.0.0.1:5050/api/v1/posts/<post_id>/comments \
-H "Content-Type: application/json" \
-d '{
"user_id": "user456",
"text": "This is a comment on the post.",
}'
```

### Update a Comment

**Endpoint:** `PUT /api/v1/posts/<post_id>/comments/<comment_id>`

```bash
curl -X PUT http://127.0.0.1:5050/api/v1/posts/<post_id>/comments/<comment_id> \
-H "Content-Type: application/json" \
-d '{
"text": "This is the updated comment text."
}'
```

### Delete a Comment

**Endpoint:** `DELETE /api/v1/posts/<post_id>/comments/<comment_id>`

```bash
curl -X DELETE http://127.0.0.1:5050/api/v1/posts/<post_id>/comments/<comment_id>
```
