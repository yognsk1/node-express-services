# node-express-services
node-express-services demo project for CRUD operations.


Need to install the chrome postman application to make requests. (POST, PUT, DELETE, GET)

Available methods are bellow

1. GET [All list]
   http://localhost:5000/api/courses

2. GET [Get an item]
   http://localhost:5000/api/courses/:id

3. POST : {name : ''} [Add new item]
   http://localhost:5000/api/courses

4. PUT : {id: 0, name : ''} [Update existing item]
   http://localhost:5000/api/courses

5. DELETE : {id: 0} [Delete an item]
   http://localhost:5000/api/courses

6. GET [Get file content]
   http://localhost:5000/api/file/:fileName/:extension

