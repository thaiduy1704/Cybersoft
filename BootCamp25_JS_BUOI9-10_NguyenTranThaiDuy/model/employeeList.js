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
        var index = this.findPositionOfList(user)
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }
}
