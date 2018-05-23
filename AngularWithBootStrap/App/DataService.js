angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id = "123") {
                return {
                    fullName: "John Wick",
                    notes: "Who killed the dog?",
                    department: "Admin",
                    perkCar: true,
                    perkrStock: false,
                    payrollType: "none"
                };
            }
            return undefined;
        };
        var insertEmployee = function (newEmployee) {
            return true;
        };
        var updateEmployee = function (employee) {
            return true;
        };
        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });