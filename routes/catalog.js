var express = require('express');
var router = express.Router();

//import controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var subject_controller = require('../controllers/subjectController');
var bookinstance_controller = require('../controllers/bookinstanceController');

//book routes

//get homepage
router.get('/', book_controller.index);
//request for creating book -> comes before those using book id
router.get('/book/create', book_controller.book_create_get);
router.post('/book/create', book_controller.book_create_post);
//request for deleting book
router.get('/book/:id/delete', book_controller.book_delete_get);
router.post('/book/:id/delete', book_controller.book_delete_post);
//request to update book
router.get('/book/:id/update', book_controller.book_update_get);
router.post('/book/:id/update', book_controller.book_update_post);
//get request for specific book details
router.get('/book/:id', book_controller.book_detail);
//get request for book list
router.get('/books', book_controller.book_list);

//author routes

//request for creating author
router.get('/author/create', author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);
//request for deleting author
router.get('/author/:id/delete', author_controller.author_delete_get);
router.post('/author/:id/delete', author_controller.author_delete_post);
//request to update author
router.get('/author/:id/update', author_controller.author_update_get);
router.post('/author/:id/update', author_controller.author_update_post);
//get request for specific author
router.get('/author/:id', author_controller.author_detail);
//get request for author list
router.get('/authors', author_controller.author_list);

//subject routes

//request for creating subject
router.get('/subject/create', subject_controller.subject_create_get);
router.post('/subject/create', subject_controller.subject_create_post);
//request for deleting subject
router.get('/subject/:id/delete', subject_controller.subject_delete_get);
router.post('/subject/:id/delete', subject_controller.subject_delete_post);
//request for updating subject
router.get('/subject/:id/update', subject_controller.subject_update_get);
router.post('/subject/:id/update', subject_controller.subject_update_post);
//get request for specific subject
router.get('/subject/:id', subject_controller.subject_detail);
//get request for subject list
router.get('/subjects', subject_controller.subject_list);

//bookinstance routes

//request for creating book instance
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get);
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);
//request for deleting book instance
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get);
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post);
//request for updating book instance
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get);
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post);
//get request for specific book instance
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail);
//get request for book instance list
router.get('/bookinstances', bookinstance_controller.bookinstance_list);

module.exports = router;