var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema (
    {
        title: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
        summary: { type: String, required: true },
        isbn: { type: String, required: true },
        subject: [{ type: Schema.Types.ObjectId, ref: 'Subject'}]
    }
);

//setting up virtual for book URL
BookSchema.virtual('url').get(function() {
    return '/catalog/book/' + this._id;
});

//export model
module.exports = mongoose.model('Book', BookSchema);