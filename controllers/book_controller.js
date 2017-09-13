var books = [
    {
        title: "Harry Potter",
        author: "J.K Rowling"
    },
    {

    }
]

var controller = {
    create: function(req, res, next){
        var newBook = req.body;
        books.push(newBook);
        res.status(200).end()
    },
    read: function(req, res, next){
        res.send(books)
    },
    // /api/books/:id
    readById: function(req, res, next){
        var id = req.params.id
        var book = books[id]
        res.json(book)
    },
    // /api/books/:id
    update: function(req, res, next){
        var id = req.params.id
        var newObj = req.body
        books[id] = newObj;
        res.send(newObj);
    },
    delete: function(req, res, next){
        var id = req.params.id;
        books.splice(id,1);

        res.end();
    }
}
    
module.exports = controller; //can 