const express = require('express')
const app = express()

const path = require('path')

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname + '/public/')))
app.use(express.json())

const tasks = [
]

app.post('/remove', (req, res) => {
    console.log(req.body.title)
    const id = tasks.findIndex(i => i.title == req.body.title)
        tasks.splice(id, 1)
        res.redirect('/')
})

app.post('/create', (req, res) => {
    const task = {
        title: req.body.title,
        date: req.body.date,
    }

    tasks.push(task)
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('toDoForm.ejs', { name: 'Chris' })
})

app.get('/todos', (req, res) => {
    res.send(tasks)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})