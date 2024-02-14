const express = require('express')
const cors = require('cors')
const {MongoClient}= require('mongodb')

const app = express()
app.use(cors())
app.use(express.json())


const client = new MongoClient('mongodb+srv://admin:admin@cluster0.wqq8vuf.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('counselling 2')
const col = db.collection('register')
col.insertOne({'student':"345"})

app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})

app.get('/', (req, res)=>{
    res.send('<h1>Hello KL University Vijayawada </h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1>This is About page</h1>')
})

app.get('/contact', (req,res)=>{
    res.send('<h1><center/>This is contact page</h1>')
})

app.post('/home', (req,res)=>{
    res.send('<h1>This is Home page</h1>')
})

app.listen(8080, ()=>{console.log('Running')})