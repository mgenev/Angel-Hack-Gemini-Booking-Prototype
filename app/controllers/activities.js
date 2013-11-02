/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Activity = mongoose.model('Activity'),
    _ = require('underscore');


/**
 * Find activity by id
 */
exports.activity = function(req, res, next, id) {
    Activity.load(id, function(err, activity) {
        if (err) return next(err);
        if (!activity) return next(new Error('Failed to load activity ' + id));
        req.activity = activity;
        next();
    });
};

/**
 * Create a activity
 */
exports.create = function(req, res) {
    var activity = new Activity(req.body);
    activity.user = req.user;

    activity.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                activity: activity
            });
        } else {
            res.jsonp(activity);
        }
    });
};

/**
 * Update a activity
 */
exports.update = function(req, res) {
    var activity = req.activity;

    activity = _.extend(activity, req.body);

    activity.save(function(err) {
        res.jsonp(activity);
    });
};

/**
 * Delete an activity
 */
exports.destroy = function(req, res) {
    var activity = req.activity;

    activity.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(activity);
        }
    });
};

/**
 * Show an activity
 */
exports.show = function(req, res) {
    res.jsonp(req.activity);
};

/**
 * List of Activitys
 */
exports.all = function(req, res) {
    Activity.find().sort('-created').populate('user', 'name username').exec(function(err, activitys) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(activitys);
        }
    });
};
