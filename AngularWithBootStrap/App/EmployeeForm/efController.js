angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        if ($routeParams.id) {
            $scope.employee = DataService.getEmployee($routeParams.id);
        }
        else
            $scope.employee = { id: 0 };
        //$scope.employee = DataService.getEmployee;
        $scope.editableEmployee = angular.copy($scope.employee);
        $scope.department = [
            "Engg",
            "Admin",
            "Marketing",
            "Finance"
        ];
        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                //Insert new Employee
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                //update the Employee
                DataService.updateEmployee($scope.editableEmployee);
            }
            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
        }

        $scope.cancelForm = function () {
            $window.history.back();
        }
    }
);