/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Client = mongoose.model('Client'),
    _ = require('underscore');


/**
 * Find article by id
 */
exports.client = function(req, res, next, id) {
    Client.load(id, function(err, client) {
        if (err) return next(err);
        if (!client) return next(new Error('Failed to load client ' + id));
        req.client = client;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var client = new Client(req.body);
    client.user = req.user;

    client.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                client: client
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {
    var client = req.client;

    client = _.extend(client, req.body);

    client.save(function(err) {
        res.jsonp(client);
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var client = req.client;

    client.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.client);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Client.find().sort('-created').populate('user', 'name username').exec(function(err, clients) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(clients);
        }
    });
};