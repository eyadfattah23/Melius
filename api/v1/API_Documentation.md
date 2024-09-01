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
curl -X GET http://localhost:5050/api/v1/posts/<post_id>/comments
```

### Create a Comment on a Post

**Endpoint:** `POST /api/v1/posts/<post_id>/comments`

```bash
curl -X POST http://127.0.0.1:5050/api/v1/posts/<post_id>/comments \
-H "Content-Type: application/json" \
-d '{
"user_id": "user456",
"text": "This is a comment on the post."
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

## Posts Likes

### Retrieve Likes for a Post

**Endpoint:** `GET /api/v1/posts/<post_id>/likes`

```bash
curl -X GET http://localhost:5050/api/v1/posts/<post_id>/likes
```

### Retrieve Likes count for a Post

**Endpoint:** `GET /api/v1/posts/<post_id>/likes/count`

```bash
curl -X GET http://localhost:5050/api/v1/posts/<post_id>/likes/count
```

### Handles liking or unliking a post by a specific user

**Endpoint:** `POST /posts/<post_id>/likes`

```bash
curl -X POST http://localhost:5050/api/v1/posts/<post_id>/likes \
-H "Content-Type: application/json" \
-d '{"user_id": "<user_id>"}'
```

## Articles

### Get All Articles

**Endpoint:** `GET /articles`

**Curl Command:**

```bash
curl -X GET http://localhost:5050/api/v1/articles
```

### **Get a Specific Article by ID**

**Endpoint:** `GET /api/v1/articles/<article_id>`

```bash
curl -X GET http://localhost:5050/api/v1/articles/<article_id>
```

### **Create a New Article**

**Endpoint:** `POST /api/v1/articles`

```bash
curl -X POST http://localhost:5050/api/v1/articles -H "Content-Type: application/json" -d '{
"title": "Sample Article Title",
"content": "This is the content of the article.",
"author": "Author Name"
}'
```

### **Update an Existing Article**

**Endpoint:** `PUT /api/v1/articles/<article_id>`

```bash
curl -X PUT  http://localhost:5050/api/v1/articles/<article_id> \
-H "Content-Type: application/json" \
-d '{"title": "Updated Title", "content": "Updated Content", "author": "Updated Author"}'

```

### **Delete an Article**

**Endpoint:** `DELETE /api/v1//articles/<article_id>`

```bash
curl -X DELETE  http://localhost:5050/api/v1/articles/<article_id>
```

## **Timer**

### start or Reset Timer

**Endpoint:** `POST /api/v1/timer/reset_or_create`

**Request Response:**

```json
{
  "data": {
    "__class__": "TimerHistory",
    "created_at": "2024-08-30T18:20:28.000000",
    "id": "de1fdca9-e5dd-4674-9f2c-d7bff19e8918",
    "max_time": 5,
    "no_tries": 8,
    "reset_date": "Fri, 30 Aug 2024 18:32:08 GMT",
    "start_date": "Fri, 30 Aug 2024 18:32:08 GMT",
    "updated_at": "2024-08-30T18:20:28.000000",
    "user_id": "<user_id>"
  }
}
```

**Curl Command:**

```bash
curl -X POST  http://127.0.0.1:5050/api/v1/timer/reset_or_create \
-H "Content-Type: application/json" \
-d '{
"user_id": "<user_id>",
}'
```

### Get Timer Status

**Endpoint:** `GET /api/v1/timer/status`

**Request Response:**

```json
{
  "data": {
    "__class__": "TimerHistory",
    "created_at": "2024-08-30T18:20:28.000000",
    "id": "de1fdca9-e5dd-4674-9f2c-d7bff19e8918",
    "max_time": 5,
    "no_tries": 8,
    "reset_date": "Fri, 30 Aug 2024 18:32:08 GMT",
    "start_date": "Fri, 30 Aug 2024 18:32:08 GMT",
    "updated_at": "2024-08-30T18:20:28.000000",
    "user_id": "<user_id>"
  }
}
```

**Curl Command:**

```bash
curl -X GET  http://127.0.0.1:5050/api/v1/timer/status
```

### Get Top 10 Timers

**Endpoint:** `GET /api/v1/timer/top10`

**Request Response:**

```json
[
  { "max_time": "5", "user_id": "2b3c4d5e6f7g" },
  { "max_time": "1", "user_id": "65sdfghr4drg" }
]
```

**Curl Command:**

```bash
curl -X GET  http://127.0.0.1:5050/api/v1/timer/top10
```
