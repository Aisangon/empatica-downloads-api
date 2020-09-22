const express = require('express')
const app = express()
const fs = require('fs')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/api/downloads', (req, res) => {
    fs.readFile(`${__dirname}/data/downloads.json`, 'utf-8', (err, data) => {
        res.send(data)
    })
})

app.get('/api/stats', (req, res) => {
    fs.readFile(`${__dirname}/data/stats.json`, 'utf-8', (err, data) => {
        res.send(data)
    })
})

const server = app.listen(8888, () => {
    const port = server.address().port
    console.log(`Server started on ${port}`)
})