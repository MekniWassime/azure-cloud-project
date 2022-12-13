const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

//test endpoint
app.get('/test', (req, res) => {
    res.send({
        "message": "data from backend",
        "requestDate": Date.now()
    })
})
//health check
app.get('/', (req, res) => {
    res.status(200).send()
})

var port = '3000';
app.listen(port, () => console.log(`App initialized listening on port ${port}!`))