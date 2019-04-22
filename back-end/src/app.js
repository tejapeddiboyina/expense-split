var express = require('express'),
    app = express(),
    cors = require('cors')

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method, req.url)
    next()
})

app.get('/', (req, res) => {
    res.send({'msg': 'happy browsing'})
})

app.listen(8080, () => {
    console.log('helloworld')
})