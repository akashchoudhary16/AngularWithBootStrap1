var angularFormsApp = angular.module('angularFormsApp', ['ngRoute','ui.bootstrap']);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller:"HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/editEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo:"/home"
        })
});

angularFormsApp.controller("HomeController", function ($scope, $location, $uibModal, $log, DataService) {

    $scope.addNewEmployee = function () {
        //$location.path('/newEmployeeForm');
        var modalInstance = $uibModal.open({
            templateUrl: 'app/EmployeeForm/efTemplate.html',
            controller: 'efController',
            windowClass: 'show',
            backdropClass: 'show'
        });
        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.editEmployee = function (id) {
        $location.path('/editEmployeeForm/'+id);
    };
});