import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)
})

app.get('/usuarios', (req, res) => {
    res.send(users)
})


app.listen(3000);