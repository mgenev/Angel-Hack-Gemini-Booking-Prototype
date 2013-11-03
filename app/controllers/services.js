/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Service = mongoose.model('Service'),
    _ = require('underscore');


/**
 * Find service by id
 */
exports.service = function(req, res, next, id) {
    console.log("id in service.service", id);
    Service.load(id, function(err, service) {
        if (err) return next(err);
        if (!service) return next(new Error('Failed to load service ' + id));
        req.service = service;
        next();
    });
};

/**
 * Create a service
 */



exports.create = function(req, res) {
    var service = new Service(req.body);
    service.client = req.client;

    service.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                service: service
            });
        } else {
            res.jsonp(service);
        }
    });
};

/**
 * Update a service
 */
exports.update = function(req, res) {
    var service = req.service;

    service = _.extend(service, req.body);

    service.save(function(err) {
        res.jsonp(service);
    });
};

/**
 * Delete an service
 */
exports.destroy = function(req, res) {
    var service = req.service;

    service.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(service);
        }
    });
};

/**
 * Show an service
 */
exports.show = function(req, res) {
    res.jsonp(req.service);
};

/**
 * List of Services
 */
exports.all = function(req, res) {
    Service.find().sort('-created').populate('client', 'name address').exec(function(err, services) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(services);
        }
    });
};
