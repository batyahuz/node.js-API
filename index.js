import express from 'express'

const app = express()

const tasks = [{ id: 1, title: 'לסיים הסרטות'}]

app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/tasks', (req, res) => {
    res.send(tasks);
})



app.listen(3000, () => {
    console.log('app is running on http://localhost:3000');
})