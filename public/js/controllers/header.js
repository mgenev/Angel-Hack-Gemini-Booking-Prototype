angular.module('mean.system').controller('HeaderController', ['$scope', 'Global',
    function($scope, Global) {
        $scope.global = Global;

        $scope.menu = [{
                "title": "Reservations",
                "link": "reservations"
            }, {
                "title": "Clients",
                "link": "clients"
            }, {
                "title": "Booking",
                "link": "bookingflow"
            },
            {
                "title": "Create New Client",
                "link": "clients/create"
            }, {
                "title": "Create New Reservation",
                "link": "reservations/create"
            }
        ];

        $scope.isCollapsed = false;
    }
]);
