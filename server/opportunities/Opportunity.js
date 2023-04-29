var mongoose = require('mongoose')

var OpportunitySchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    mark: Number,
    image: String,
});

mongoose.model('Opportunity', OpportunitySchema);

module.exports = mongoose.model('Opportunity');