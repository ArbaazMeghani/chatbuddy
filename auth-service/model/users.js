const mongoose = require('mongoose')

const users = mongoose.model("users", {
  username: String,
  password: String
})

async function findAll() {
  return await users.find()
}

async function findByUsername(username) {
  return await users.findOne({username: username})
}

async function save(user) {
  const newUser = new users(user)
  await newUser.save()
}

module.exports = {
  findAll: findAll,
  findByUsername: findByUsername,
  save: save
}