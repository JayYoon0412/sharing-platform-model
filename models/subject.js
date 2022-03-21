var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubjectSchema = new Schema (
    {
        name: { type: String, required: true, minLength: 3, maxLength: 100 }
    }
);

//setting up virtual for subject url
SubjectSchema.virtual('url').get(function() {
    return '/catalog/subject/' + this._id;
});

//export model
module.exports = mongoose.model('Subject', SubjectSchema);