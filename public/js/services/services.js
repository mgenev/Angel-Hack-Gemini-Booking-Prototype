//Articles service used for articles REST endpoint
angular.module('mean.reservations').factory("Reservations", ['$resource', function($resource) {
    return $resource('reservations/:reservationId', {
        reservationId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.services').factory("Services", ['$resource', function($resource) {
    return $resource('services/:serviceId', {
        serviceId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.clients').factory("Clients", ['$resource', function($resource) {
    return $resource('clients/:clientId', {
        clientId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

angular.module('mean.users').factory("Users", ['$resource', function($resource) {
    return $resource('users/:userId', {
        clientId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);