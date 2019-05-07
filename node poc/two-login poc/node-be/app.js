const _ = require('lodash');
const express = require('express');
//jwt token require
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const app = express();



//jwt configure
app.use(bodyParser.json());
app.use(expressJwt({secret: 'user-login-info'}).unless({path: ['/api/auth']}));

var USERS = [
    { 'username': 'djay', password: 'djay123' },
    { 'username': 'adam', password: 'adam123' },
    { 'username': 'smith', password: 'smith123' },
];
/* function getTodos(userID) {
    var todos = _.filter(TODOS, ['user_id', userID]);

    return todos;
} */

function getUsers() {
    return USERS;
}


app.post('/api/auth', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username == body.username && user.password == body.password);
  if(!user) {
    return res.sendStatus(401);
  }
  
  var token = jwt.sign({userID: user.id}, 'user-login-info', {expiresIn: '2h'});
  res.send({token});
});

app.get('/api/users', function (req, res) {
    res.type("json");
    res.send(getUsers());
});

app.listen(4000, function () {
    console.log('Angular JWT Todo API Server listening on port 4000!')
});
