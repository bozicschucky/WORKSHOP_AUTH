## Workshop

Express, Mongo, Mongoose, JWT, API Testing

---

### API

Before creating tasks a user has to be authenticated

Create a .env file following the env_sample file provided in the project

#### User Auth

###### Create user

```
POST api/auth/user

{
    "username": "string",
    "password": "string"
}
```

###### Log user in to get a token

```
POST api/auth/user/login
{
    "username": "string",
    "password": "string"
}
```

Pass the token in the protected routes headers which include post/put/delete

```
Bearer "userToken" using postman or any client
```

#### Tasks

###### Create

```
POST /api/tasks/
{
    "title": "I need to do this",
    "description": "I really need to do it."
}
```

###### List

```
POST /api/tasks/
```

###### Get

```
GET /api/tasks/:id
```

###### Update

```
POST /api/tasks/:id
{
    "title": "You need to do this",
    "description": "You really need to it."
}

```

###### Delete

```
POST /api/tasks/:id
```

### Resources

###### Postman Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9675987bb6d61d944574#?env%5BWorkshop%5D=W3sidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlLCJrZXkiOiJ1cmwiLCJ2YWx1ZSI6IjAuMC4wLjA6ODAwMCIsImRlc2NyaXB0aW9uIjoiIn1d)
