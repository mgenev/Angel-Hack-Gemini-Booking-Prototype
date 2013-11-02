/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Activity Schema
 */
var ActivitySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    client: {
        type: Schema.ObjectId,
        ref: 'Client'
    }
});

/**
 * Validations
 */
ActivitySchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
ActivitySchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('client', 'name address').exec(cb);
    }
};

mongoose.model('Activity', ActivitySchema);
