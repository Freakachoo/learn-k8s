const express = require('express')

const app = express()

app.use('*', (req, res, next) => {
    res.send('<h1>Hello from express Deployed Automatically 2</h1>')
})

app.listen(4000, () => {
    console.log('Express app run on port 4000')
})
