var mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema({
    title: String,
    details: String,
    resolved: {
        type: Boolean,
        Default: false
    },
    createdBy: {
        userEmail: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    createdOn: {
        type: Date,
        "default": Date.now
    },
    assignedTo: {
        userEmail: {
            type: String,
        },
        name: {
            type: String,
        }
    },
    resolvedOn: {
        type: Date
    }
});

module.exports = mongoose.model('ticket', ticketSchema);
