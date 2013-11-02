/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.profile.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Article authorizations routing middleware
 */
exports.article = {
    hasAuthorization: function(req, res, next) {
        if (req.article.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Client authorizations routing middleware
 */
exports.client = {
    hasAuthorization: function(req, res, next) {
        if (req.client.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Reservation authorizations routing middleware
 */
exports.reservation = {
    hasAuthorization: function(req, res, next) {
        if (req.reservation.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};


/**
 * Activity authorizations routing middleware
 */
exports.activity = {
    hasAuthorization: function(req, res, next) {
        if (req.activity.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};
