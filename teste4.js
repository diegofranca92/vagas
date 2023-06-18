const data = require('./fakeData')

const updateUser = function (req, res) {
  let { id } = req.query

  const reg = data.find(d => id == id)
  reg.name = req.body.name
  reg.job = req.body.job

  res.send(reg)
}

module.exports = {
  updateUser
}
