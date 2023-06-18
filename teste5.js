module.exports = function (req, res) {
  let { name } = req.query

  res.send('Usuário ' + name + '  foi lido 0 vezes.')
}
