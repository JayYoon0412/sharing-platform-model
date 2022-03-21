var Subject = require('../models/subject');
var Book = require('../models/book');

var async = require('async');
const { body, validationResult } = require('express-validator');

//display list of all subjects
exports.subject_list = function(req, res, next) {
        Subject.find()
        .sort({name: 1})
        .exec(function(err, results) {
            if (err) { return next(err); }
            res.render('subject_list', {title: 'All Subject Categories', subjects_list: results});
        });
}
//display detail page for specific subject
exports.subject_detail = function(req, res, next) {
    async.parallel({
        subject: function(callback) {
            Subject.findById(req.params.id)
            .exec(callback);
        },
        subject_books: function(callback) {
            Book.find({'subject': req.params.id})
            .exec(callback)
        }
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.subject==null) {
            var error = new Error('No Subjects Found');
            error.status = 404;
            return next(error);
        }
        res.render('subject_detail', {title: 'More on Subject', subject: results.subject, subject_books: results.subject_books});
    });
}
//display subject instance create form on GET
exports.subject_create_get = function(req, res) {
    res.render('subject_form', { title: 'New Subject Category' });
}
//handle subject create on POST
exports.subject_create_post = [
    body('name', 'Subject name required').trim().isLength({ min: 1 }).escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        var subject = new Subject({
            name: req.body.name
        });
        if (!errors.isEmpty()) {
            res.render('subject_form', { title: 'New Subject Category', subject: subject, errors: errors.array()});
            return;
        }
        else {
            Subject.findOne({'name': req.body.name})
            .exec(function(err, found_subject) {
                if (err) { return next(err) };
                if (found_subject) { res.redirect(found_subject.url); }
                else {
                    subject.save(function (err) {
                        if (err) { return next(err); }
                        res.redirect(subject.url);
                    });
                }
            });
        }
    }
]
//display subject delete form on GET
exports.subject_delete_get = function(req, res) {
    res.send('SKELETON: subject delete on GET')
}
//handle subject delete on POST
exports.subject_delete_post = function(req, res){
    res.send('SKELETON: subject delete on POST')
}
//display subject update form on GET
exports.subject_update_get = function(req, res) {
    res.send('SKELETON: subject update on GET')
}
//handle subject update on POST
exports.subject_update_post = function(req, res){
    res.send('SKELETON: subject update on POST')
}