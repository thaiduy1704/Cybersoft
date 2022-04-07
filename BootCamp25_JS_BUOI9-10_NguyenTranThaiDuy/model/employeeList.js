function EmployeeList() {
    this.data = [];
    this.addEmployee = function (employee) {
        this.data.push(employee);
    }
}   