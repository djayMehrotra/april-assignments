console.log('index3.js is running');
const express = require("express");
const app = express();
const Joi = require("joi");
var cors = require('cors');
 
app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log("Listening to 3000"));
 
const users = [
  { username: "dhananjay", password: "deej123" },
  { username: "john", password: "john123" },
  { username: "smith", password: "smith123" }
];
 
//Rest end point

app.get("/", (req, res) => {
     res.send("Testing all ok!!!");
});
//getAll
app.get("/api/getAll", (req, res) => res.send(users));
 
// Login user
app.post("/api/login", (req, res) => {
  const user = users.find(c => c.username === req.body.username);
 
  if (!user)
    return res
      .status(404)
      .send("Please try agin with correct username/password");
 
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
 
  //updating the genreType
  if (user.password != req.body.password) {
    return res
      .status(404)
      .send("Please try again with correct username/password");
  }
 
  return res.send("Login successfull");
});
 
 function validateUser(user) {
  const schema = {
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(user, schema);
} 