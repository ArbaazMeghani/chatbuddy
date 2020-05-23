const users = []

function findAll() {
  return users;
}

function findByUsername(username) {
  return users.find(user => user.username === username)
}

function save(user) {
  users.push(user)
}

module.exports = {
  findAll: findAll,
  findByUsername: findByUsername,
  save: save
}