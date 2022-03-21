var Author = require('../models/author');

//display all list of author/publishers
exports.author_list = function(req, res) {
    res.send('SKELETON: Author List')
}
//display detail pages for author
exports.author_detail = function(req, res) {
    res.send('SKELETON: Author Details')
}
//display author create form on GET
exports.author_create_get = function(req, res) {
    res.send('SKELETON: Author create on GET')
}
//handle author create on POST
exports.author_create_post = function(req, res) {
    res.send('SKELETON: Author create on POST')
}
//display author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('SKELETON: Author delete on GET')
}
//handle author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('SKELETON: Author delete on POST')
}
//display author update form on GET
exports.author_update_get = function(req, res) {
    res.send('SKELETON: Author update on GET')
}
//handle author update on POST
exports.author_update_post = function(req, res) {
    res.send('SKELETON: Author update on POST')
}