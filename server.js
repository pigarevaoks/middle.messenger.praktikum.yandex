const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static(`${__dirname}/dist`))

app.use((req, res) => {
    res.status(404).sendFile(`${__dirname}/dist/404.html`)
    res.status(500).sendFile(`${__dirname}/dist/500.html`)
})

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})
