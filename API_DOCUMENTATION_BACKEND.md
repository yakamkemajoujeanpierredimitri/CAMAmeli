# API Documentation

This document provides a summary of the API endpoints, their expected requests, and possible responses.

## Auth Routes (`/auth`)

### POST `/auth/register`

Register a new user.

**Request Body**:

```json
{
  "name": "string",
  "email": "string",
  "phoneNumber": "string"
}
```

**Responses**:

*   `201 Created`:
    ```json
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "phoneNumber": "string",
      "role": "string"
    }
    ```
*   `400 Bad Request`: If any of the fields are missing or if the user already exists.

### POST `/auth/login`

Login an existing user.

**Request Body**:

```json
{
  "email": "string"
}
```

**Responses**:

*   `200 OK`:
    ```json
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "phoneNumber": "string",
      "role": "string"
    }
    ```
*   `400 Bad Request`: If the email is missing.
*   `401 Unauthorized`: If the user is not found.

### POST `/auth/admin/login`

Sends a verification code to the admin's email.

**Request Body**:

```json
{
  "email": "string"
}
```

**Responses**:

*   `200 OK`:
    ```json
    {
      "message": "Code sent",
    }
    ```
*   `401 Unauthorized`: If the user is not found or is not an admin.

### POST `/auth/admin/verify`
after admin has verify the code i send him through the email
Login an admin with the verification code.

**Request Body**:

```json
{
  "email": "string",
  "code":"string"
}
```

**Responses**:

*   `200 OK`:
    ```json
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "phoneNumber": "string",
      "role": "string"
    }
    ```
*   `401 Unauthorized`: If the user is not found.

### GET `/auth/google/login`

Initiate Google login. Redirects to Google for authentication.

### GET `/auth/google/signup`

Initiate Google signup. Redirects to Google for authentication.

### GET `/auth/google/callback/login`

Google login callback. Redirects to the client URL on success and to `/login` on failure.

### GET `/auth/google/callback/signup`

Google signup callback. Redirects to the client URL on success and to `/register` on failure.

### POST `/auth/logout`

Logout a user.

**Responses**:

*   `200 OK`:
    ```json
    {
      "message": "Logout successful"
    }
    ```

## File Routes (`/post`)

### POST `/post/created`

Create a new file. (Requires admin privileges)

**Request Body**: `multipart/form-data` with fields:

*   `title`: string
*   `description`: string
*   `category`: string enum: ['formation', 'event', 'temoignage']
*   `price`: number
*   `file`: the file to upload
* `location`:string
* `date`:Date
* `apply`:number
* `categoryEvent`:string enum: ['software', 'business', 'concours']


**Responses**:

*   `201 Created`:
    ```json
    {
      "message": "File created successfully",
      "file": {
          "user": "string",
          "filename": "string",
          "description": "string",
          "category": "string",
          "price": "number",
          "fileurl": "string",
          "format": "string",
          "eventDetails":{
            "location":"string",
            "date":"Date",
            "apply":"number",
            "categoryDetail":"string"
          }
      }
    }
    ```
*   `400 Bad Request`: If required fields are missing or no file is provided.
*   `403 Forbidden`: If the user is not an admin.
*   `500 Internal Server Error`: If file creation fails.

### GET `/post/getall`

Get all files.

**Responses**:

*   `200 OK`:
    ```json
    [
      { ...fileObject }
    ]
    ```
*   `404 Not Found`: If no files are found.

### GET `/post/getfile/:category`

Get files by category.

**URL Parameters**:

*   `category`: The category of the files. enum: ['formation', 'event', 'temoignage']

**Responses**:

*   `200 OK`:
    ```json
    [
      { ...fileObject }
    ]
    ```
*   `400 Bad Request`: If the category is not provided or is not valid.
*   `404 Not Found`: If no files are found in this category.

### GET `/post/:id`

Get a file by its ID.

**URL Parameters**:

*   `id`: The ID of the file.

**Responses**:

*   `200 OK`:
    ```json
    { ...fileObject }
    ```
*   `400 Bad Request`: If the file ID is not provided.
*   `404 Not Found`: If the file is not found.

### PUT `/post/:id`

Update the price of a file. (Requires admin privileges)

**URL Parameters**:

*   `id`: The ID of the file.

**Request Body**:

```json
{
  "price": "number"
}
```

**Responses**:

*   `200 OK`:
    ```json
    {
      "message": "Price updated successfully",
      "file": { ...fileObject }
    }
    ```
*   `400 Bad Request`: If the file ID or price is not provided.
*   `403 Forbidden`: If the user is not an admin.
*   `404 Not Found`: If the file is not found.

### DELETE `/post/:id`

Delete a file by its ID. (Requires admin privileges)

**URL Parameters**:

*   `id`: The ID of the file.

**Responses**:

*   `200 OK`:
    ```json
    {
      "message": "File deleted successfully"
    }
    ```
*   `400 Bad Request`: If the file ID is not provided.
*   `403 Forbidden`: If the user is not an admin.
*   `404 Not Found`: If the file is not found.

## User Routes (`/user`)

### PUT `/user/update-profile`

Update the user's profile.

**Request Body**:

```json
{
  "name": "string",
  "phoneNumber": "string"
}
```

**Responses**:

*   `200 OK`:
    ```json
    {
      "message": "Profile updated successfully"
    }
    ```
*   `400 Bad Request`: If the fields are not filled correctly.

### PUT `/user/add-admin`

Promote a user to admin. (Requires admin privileges)

**Request Body**:

```json
{
  "userId": "string"
}
```

**Responses**:

*   `200 OK`:
    ```json
    {
      "message": "User promoted to admin successfully"
    }
    ```
*   `401 Unauthorized`: If the user is not an admin.
*   `404 Not Found`: If the user is not found.