const express = require('express')
const app = express()

const db = require('./config/db')
app.use(express.json())

// routes
const gigsRouter = require('./routes/gigs')
app.use('/api/v1', gigsRouter)


async function start() {
    try {
        await db.authenticate()
        console.log('connection has been successfuly');
    } catch (err) {
        console.log(err)
    }
}

start()


app.listen(5000, () => {
    console.log('running on port 5000')
})