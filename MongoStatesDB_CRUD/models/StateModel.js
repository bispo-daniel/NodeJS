const mongoose = require('mongoose');

let StateSchema = mongoose.Schema(
    {
        state_id: {
            type: Number,
            required: true, 
            default: 0
        }, 
        name: {
            type: String,
            required: true
        },
        population: {
            type: Number,
            required: true,
            default: 0
        }
    }
)

let StateModel = mongoose.model('State', StateSchema);

module.exports = StateModel;