const server = require('./server')

const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on http://localhost:' + PORT)
})
