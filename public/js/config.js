//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/articles', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).
        when('/clients', {
            templateUrl: 'views/clients/list.html'
        }).
        when('/clients/create', {
            templateUrl: 'views/clients/create.html'
        }).
        when('/clients/:clientId/edit', {
            templateUrl: 'views/clients/edit.html'
        }).
        when('/clients/:clientId', {
            templateUrl: 'views/clients/view.html'
        }).
        when('/services', {
            templateUrl: 'views/services/list.html'
        }).
        when('/services/create/:clientId', {
            templateUrl: 'views/services/create.html'
        }).
        when('/services/:serviceId/edit', {
            templateUrl: 'views/services/edit.html'
        }).
        when('/services/:serviceId', {
            templateUrl: 'views/services/view.html'
        }).
        when('/reservations', {
            templateUrl: 'views/reservations/list.html'
        }).
        when('/reservations/create', {
            templateUrl: 'views/reservations/create.html'
        }).
        when('/reservations/:reservationId/edit', {
            templateUrl: 'views/reservations/edit.html'
        }).
        when('/reservations/:reservationId', {
            templateUrl: 'views/reservations/view.html'
        }).
        when('/bookingflow', {
            templateUrl: 'views/bookingflow/greeting.html'
        }).
        when('/bookingflow/datedestination', {
            templateUrl: 'views/bookingflow/datedestination.html'
        }).
        when('/bookingflow/servicelist/:reservationId', {
            templateUrl: 'views/bookingflow/servicelist.html'
        }).
        when('/bookingflow/service-activity-list/:reservationId', {
            templateUrl: 'views/bookingflow/service-activity-list.html'            
        }).

        when('/bookingflow/confirm-reservation/:reservationId', {
            templateUrl: 'views/bookingflow/confirm-reservation.html'            
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);
