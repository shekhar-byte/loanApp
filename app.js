require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const Application = require('./models/application.js')

app.use(express.static('build'))
app.use(bodyParser.json());

app.use(cors())
mongoose.connect(process.env.DB_URL)
    .then(res => {
        console.log('Database connected')
    }).catch(e => console.log(e))


app.get('/loanApplication', (req,res) => {
  res.send("hello world!!!")
})

app.post('/loanApplication',async (req,res,next) => {
  try {
    console.log(req.body)
    const newApplication = new Application(req.body)
    await   newApplication.save()

  } catch (e) {

    next(e)
  }


})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }else{
      return response.status(400).json({ error: error.message })
    }
    next(error)
}
app.use(errorHandler)

app.listen(process.env.PORT , (req,res) => {
  console.log('listening at server 5000')
})
