const mongoose = require('mongoose');
mongoose.pluralize(null);
// Define schema
const Schema = mongoose.Schema;

const JobModelSchema = new Schema({
    name: String,
    data: Array,
    timestamp: String
});

// Compile model from schema
module.exports = mongoose.model("Job", JobModelSchema);