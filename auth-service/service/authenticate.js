const keys = require('../config/keys')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const users = require('../model/users')

async function retrieveUsers() {
  return await users.findAll();
}

async function login(username, password) {
  const user = await users.findByUsername(username);

  if(user == null) {
    console.log("user not found")
    return null;
  }

  if(await bcrypt.compare(password, user.password)) {
    return {
      token: jwt.sign({username: username}, keys.JWT_SECRET)
    }
  } else {
    return null
  }
}

async function signup(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = {
    username: username,
    password: hashedPassword
  }

  await users.save(user)
  return await login(username, password)
}

module.exports = {
  retrieveUsers: retrieveUsers,
  login: login,
  signup: signup
};