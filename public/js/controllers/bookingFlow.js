angular.module('mean.bookingflow').controller('BookingFlowController', ['$scope', '$routeParams', '$location', 'Global', 'Reservations', function ($scope, $routeParams, $location, Global, Reservations, Clients, Services, Users) {
    $scope.global = Global;
    $scope.reservation = {};

    $scope.start = function () {
        $location.path("bookingflow/date-location" );
    }

    $scope.pickDateDestination = function () {
        $scope.reservation.destination = this.destination;
        $scope.reservation.start = this.start;
        $scope.reservation.end = this.end;

        console.log($scope.reservation);
    }

    // $scope.create = function() {
    //     var reservation = new Reservations({
    //         title: this.title,
    //         content: this.content
    //     });
    //     reservation.$save(function(response) {
    //         $location.path("reservations/" + response._id);
    //     });

    //     this.title = "";
    //     this.content = "";
    // };

    // $scope.remove = function(reservation) {
    //     reservation.$remove();  

    //     for (var i in $scope.reservation) {
    //         if ($scope.reservations[i] == reservation) {
    //             $scope.reservations.splice(i, 1);
    //         }
    //     }
    // };

    // $scope.update = function() {
    //     var reservation = $scope.reservation;
    //     if (!reservation.updated) {
    //         reservation.updated = [];
    //     }
    //     reservation.updated.push(new Date().getTime());

    //     reservation.$update(function() {
    //         $location.path('reservations/' + reservation._id);
    //     });
    // };

    // $scope.find = function() {
    //     Reservations.query(function(reservations) {
    //         $scope.reservations = reservations;
    //     });
    // };

    // $scope.findOne = function() {
    //     Reservations.get({
    //         reservationId: $routeParams.reservationId
    //     }, function(reservation) {
    //         $scope.reservation = reservation;
    //     });
    // };
}]);