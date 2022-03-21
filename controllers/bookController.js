var Book = require('../models/book');
var Author = require('../models/author');
var Subject = require('../models/subject');
var BookInstance = require('../models/bookinstance');

var async = require('async');

//display site welcome page
exports.index = function(req, res) {
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback)
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback)
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status: 'Available'}, callback)
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback)
        },
        subject_count: function(callback) {
            Subject.countDocuments({}, callback)
        }
    }, function(err, results) {
        res.render('index', {title: 'Sharing Economy Platform', error: err, data: results});
    });
};
//display all list of books
exports.book_list = function(req, res, next) {
    Book.find({}, 'title author')
    .sort({title: 1})
    .populate('author')
    .exec(function(err, list_books) {
        if (err) {return next(err)}
        res.render('book_list', {title: 'Books in Storage', book_list: list_books});
    });
};
//display detail for specific book
exports.book_detail = function(req, res) {
    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id)
            .populate('author')
            .populate('subject')
            .exec(callback); 
        },
        book_instance: function(callback) {
            BookInstance.findById(req.params.id)
            .exec(callback);
        }
    }, function (err, results) {
        if (err) { return next(err); }
        if (results.book==null) {
            var error = new Error('No Books Found');
            error.status = 404;
            return next(error);
        }
        res.render('book_detail', {title: results.book.title, book: results.book, book_instances: results.book_instance});
    });
}
//display book instance create form on GET
exports.book_create_get = function(req, res) {
    res.send('SKELETON: book create on GET')
}
//handle book create on POST
exports.book_create_post = function(req, res){
    res.send('SKELETON: book create on POST')
}
//display book delete form on GET
exports.book_delete_get = function(req, res) {
    res.send('SKELETON: book delete on GET')
}
//handle book delete on POST
exports.book_delete_post = function(req, res){
    res.send('SKELETON: book delete on POST')
}
//display book update form on GET
exports.book_update_get = function(req, res) {
    res.send('SKELETON: book update on GET')
}
//handle book update on POST
exports.book_update_post = function(req, res){
    res.send('SKELETON: book update on POST')
}