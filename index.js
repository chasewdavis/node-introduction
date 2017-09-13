//Create an app that is listening on 3000

var express = require('express');
var bodyParser = require('body-parser')
var bookController = require('./controllers/book_controller')

var app = express();

app.get('/api/books', bookController.read)
app.get('/api/books/:id', bookController.readById)
app.post('api/books', bookController.create)
app.put('api/books/:id', bookController.update)
app.delete('api/books/:id', bookController.delete)


app.use(bodyParser.json())



app.listen(3000, function(){
    console.log("Blast off!!")
})
