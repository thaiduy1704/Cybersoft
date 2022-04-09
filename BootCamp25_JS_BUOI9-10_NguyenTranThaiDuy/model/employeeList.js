function EmployeeList() {
    this.data = [];
    this.addEmployee = function (employee) {
        this.data.push(employee);
    };
    this.findPositionOfList = function (user) {
        var index = -1;
        for (var i = 0; i < this.data.length; i++) {
            var employee = this.data[i];
            if (employee.user == user) {
                index = i;
                break;
            }
        }
        return index;
    };
    this.deleteEmployee = function (user) {
        var index = this.findPositionOfList(user);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    };
    this.getInfoEmployee = function (user) {
        var index = this.findPositionOfList(user);
        if (index !== -1) {
            return this.data[index];
        }
        return null;
    };
    this.updateEmployee = function (employee) {
        var user = employee.user;
        var index = this.findPositionOfList(user);
        console.log("index" + index);
        if (index !== -1) {
            this.data[index] = employee;
        }
    };

    this.findEmployeeByRank = function (keyword) {
        var findData = [];
        for (var i = 0; i < this.data.length; i++) {
            var employee = this.data[i];

            if (employee.rank.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                findData.push(employee);
            }
        }
        return findData;
    };
}
