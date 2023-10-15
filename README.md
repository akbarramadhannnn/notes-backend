# notes-backend

## Requirement
- [Node](https://nodejs.org/en/) (v14.19.0)
- [Npm](https://www.npmjs.com/) (v6.14.16)

## BACKEND
### - Installation
- clone repositories ```git clone https://github.com/akbarramadhannnn/notes-backend.git```
- write on your cmd ```cd backend```
- run ```npm install```
- run ```npm run start```
- server running on ```http://localhost:4000```

### - Endpoint
| Description         | Method                         | Endpoint          |
| ------------------- | ------------------------------ | ----------------- |
| Register           | POST                            | /api/register     |
| Login              | POST                            | /api/login        |
| Me                 | GET                             | /api/me           |

### - Usage Example Api

#### 1. Register

URL
```
GET http://localhost:4000/api/register
```

Header Key ```"Authorization" : "Bearer your_token"```

Request Body ```application/json```
```
{
    "nama": "Akbar Ramadhan",
    "email": "akbarramadhan452@gmail.com",
    "password": "123pitik"
}
```

Sample Response:

```
{
    "success": true,
    "status": 200,
    "message": "Regsiterasi Berhasil"
}
```

#### 2. Login

URL
```
GET http://localhost:4000/api/login
```

Request Body ```application/json```
```
{
    "email": "akbarramadhan452@gmail.com",
    "password": "123pitik"
}
```

Sample Response
```
{
    "success": true,
    "status": 200,
    "message": "Login Berhasil",
    "result": {
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY5NzM1MTMyNCwiZXhwIjoxNjk3MzU0OTI0fQ.lmE1CeAkiDq4omFZ0i6SbfuBtHLb1Noh1yN9dL2Sz2IUp7GudMIgR6vYmp581lFLgntiGA5HOREEfl-uENE9ErPwWmll53KUL0xN8sN6dkI8288ZKrgEWg_4bMCNjQD58xC7wjQGaZe7Rlhqz5MX08iDaQnl55UYfg6eswuWZ-dbAaVSOLOC7IfFGZTxa6MtAMFIV-xq2sE2R1DAjAx9fOCK5zOJEc6OgV3Nt5w-kpK2irccHf73GRgqbmITxJrCraz5fLSgw69-F87k5oxjV_B_iAYRmZGZydtkacNcZc4KDSIFT4RSWFB3QI-23dK5cp-ba4phDjMUSt5ftG1j-Q"
    }
}
```

#### 3. Get User

URL
```
POST http://localhost:4000/api/me
```

Sample Response

```
{
    "success": true,
    "status": 200,
    "message": "Get User",
    "result": {
        "results": {
            "user_id": 3,
            "nama": "Akbar Ramadhan",
            "email": "akbarramadhan452@gmail.com",
            "password": "$2a$10$8b0NMSZrHknBESIfn3xfwOEwj2vS5i0NwY7x.uxybwXiRu0mnYW8m"
        }
    }
}
```
