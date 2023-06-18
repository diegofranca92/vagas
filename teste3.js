const data = require('./fakeData')

const deleteUser = function (req, res) {
  const { name, id } = req.query

  const userToDelete = data.find(user => user.id === id)
  let index = data.indexOf(userToDelete)
  console.log(userToDelete, 'userToDelete')

  if (!userToDelete) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found'
    })
  }

  data.splice(index, 1)
  res.status(204).json({
    status: 'success',
    data: null,
    message: `The user: ${name} was successfully deleted`
  })
}

module.exports = {
  deleteUser
}
