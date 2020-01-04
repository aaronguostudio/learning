const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post'
    //   const queryParams = req.params.id
    //   console.log('>>queryParams', queryParams)
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Read on port 3000')
    })
    .catch(ex => {
      console.log(ex.stack)
      process.exit(1)
    })
  })