var mongoose = require('mongoose')

var OpportunitySchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    mark: Number,
    image: Image,
});

mongoose.model('Opportunity', OpportunitySchema);

module.exports = mongoose.model('Opportunity');