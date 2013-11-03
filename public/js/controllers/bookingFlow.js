angular.module('mean.bookingflow').controller('BookingFlowController', ['$scope', '$routeParams', '$location', 'Global', 'Reservations', 'Clients', 'Services', 'Users', function ($scope, $routeParams, $location, Global, Reservations, Clients, Services, Users) {

    $('#startDate').pickadate();
    $('#endDate').pickadate();

    $scope.global = Global;
    $scope.reservation = {};
    $scope.selectedServices = [];
   
    $scope.start = function () {
        $location.path("bookingflow/datedestination" );        
    }

    $scope.findClients = function() {

        Clients.query(function(clients) {

            $scope.clients = clients;
            // $scope.pickDateDestination = false;
            $scope.resortList = true;
            console.log($scope.clients);

        });
        
    };


    $scope.findServices = function() {

        Services.query(function(services) {

            $scope.services = services;
            // $scope.pickDateDestination = false;            
            console.log($scope.services);

        });
        
    };

    $scope.create = function() {
        var reservation = new Reservations({
            startDate: this.startDate,
            endDate: this.endDate,
            destination: this.destination
        });
        reservation.$save(function(response) {
            $location.path("bookingflow/servicelist/" + response._id);
        });

        this.startDate = "";
        this.endDate = "";
        this.destination = "";
    };


    $scope.selectServices = function(e) {
        // here reservation has to equal the product of the find
        // console.log("fires", serviceId);
        var serviceId = e.srcElement.id;
        
        Services.get({
            serviceId: serviceId
        }, function(service) {
            $scope.selectedServices.push(service);
            console.log($scope.selectedServices);
        });

        var reservation = $scope.reservation;

        // reservation.updated.push(new Date().getTime());

        reservation.$update(function(response) {
            $location.path("bookingflow/servicelist/" + response._id);
        });

    };


    // $scope.remove = function(reservation) {
    //     reservation.$remove();  

    //     for (var i in $scope.reservation) {
    //         if ($scope.reservations[i] == reservation) {
    //             $scope.reservations.splice(i, 1);
    //         }
    //     }
    // };

    $scope.update = function() {
        var reservation = $scope.reservation;
        if (!reservation.updated) {
            reservation.updated = [];
        }
        reservation.updated.push(new Date().getTime());

        reservation.$update(function() {
            $location.path('reservations/' + reservation._id);
        });
    };

    // $scope.find = function() {
    //     Reservations.query(function(reservations) {
    //         $scope.reservations = reservations;
    //     });
    // };

    $scope.findOneReservation = function() {
        Reservations.get({
            reservationId: $routeParams.reservationId
        }, function(reservation) {
            $scope.reservation = reservation;
        });
    };
}]);