var BookInstance = require('../models/bookinstance');

//display list of all book instances
exports.bookinstance_list = function(req, res, next) {
    BookInstance.find()
    .populate('book')
    .exec(function(err, list_bookinstances){
        if (err) {return next(err); }
        res.render('bookinstance_list', {title: 'Books Status', bookinstances_list: list_bookinstances})
    }) 
}
//display detail page for specific book instance
exports.bookinstance_detail = function(req, res) {
    res.send('SKELETON: book instance detail')
}
//display book instance create form on GET
exports.bookinstance_create_get = function(req, res) {
    res.send('SKELETON: book instance create on GET')
}
//handle book instance create on POST
exports.bookinstance_create_post = function(req, res){
    res.send('SKELETON: book instance create on POST')
}
//display book instance delete form on GET
exports.bookinstance_delete_get = function(req, res) {
    res.send('SKELETON: book instance delete on GET')
}
//handle book instance delete on POST
exports.bookinstance_delete_post = function(req, res){
    res.send('SKELETON: book instance delete on POST')
}
//display book instance update form on GET
exports.bookinstance_update_get = function(req, res) {
    res.send('SKELETON: book instance update on GET')
}
//handle book instance update on POST
exports.bookinstance_update_post = function(req, res){
    res.send('SKELETON: book instance update on POST')
}