const data = require('./fakeData')

const getUser = (req, res, next) => {
  let { name } = req.query

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      res.send(data[i])
    }
  }
}

const getUsers = (req, res, next) => {
  res.send(data)
}

module.exports = {
  getUser,
  getUsers
}
