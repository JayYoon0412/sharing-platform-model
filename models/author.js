var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema (
    {
        first_name: { type: String, required: true, maxLength: 100 },
        last_name: { type: String, required: true, maxLength: 100 },
        date_of_birth: { type: Date },
        date_of_death: { type: Date },
    }
    );
//setting up virtual for author full name
AuthorSchema.virtual('name').get(function() {
    var fullName = '';
    if (this.first_name && this.last_name){
        fullName = this.last_name + ', ' + this.first_name;
    }
    if (!this.first_name || !this.last_name) {
        fullName = '';
    }
    return fullName;
});

//setting up virtual for author life span
AuthorSchema.virtual('lifeSpan').get(function() {
    var lifeTime_string = '';
    if (this.date_of_birth) {
        lifeTime_string = this.date_of_birth.getYear().toString();
    }
    lifeTime_string += ' - ';
    if (this.date_of_death) {
        lifeTime_string = this.date_of_death.getYear().toString();
    }
    return lifeTime_string;
});

//setting up virtual for author URL
AuthorSchema.virtual('url').get(function() {
    return '/catalog/author/' + this._id;
});

//export model
module.exports = mongoose.model('Author', AuthorSchema);