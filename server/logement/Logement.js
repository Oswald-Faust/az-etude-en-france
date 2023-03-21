var mongoose = require('mongoose');

var LogementShema = new mongoose.Schema({
    localisation: {
        departement: String, // departement name
        town: String, // town of appart
        adresse: String // adress for more precission
    },
    views: {
        main: String, // main image description url
        futher: [String] // overview of appart
    },
    note: Number, // client notation
    description: String // descriptive text about appart
});

mongoose.model('Logement', LogementShema);

module.exports = mongoose.model('Logement');
