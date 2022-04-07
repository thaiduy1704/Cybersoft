// Create sample data

const data = [
    {
        _user: "thaiduy1704",
        _name: "Thai Duy",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "04/07/2005",
        _salaryBasic: "2500000",
        _role: "Sếp",
        _workTime: "150"

    }, {
        _user: "tuanloc2305",
        _name: "Tuan Loc",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "04/07/2015",
        _salaryBasic: "3500000",
        _role: "Trưởng phòng",
        _workTime: "200"

    }, {
        _user: "levy1905",
        _name: "Le Vy",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "17/07/2006",
        _salaryBasic: "2500000",
        _role: "Nhân viên",
        _workTime: "140"

    }, {
        _user: "thaiduy17042000",
        _name: "Thai Duy Minh",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "04/07/2005",
        _salaryBasic: "2500000",
        _role: "Sếp",
        _workTime: "210"

    }
]

var employeeList = new EmployeeList();

var user1 = new Employee(data[0])
var user2 = new Employee(data[1])
var user3 = new Employee(data[2])
var user4 = new Employee(data[3])


employeeList.addEmployee(user1);
employeeList.addEmployee(user2);
employeeList.addEmployee(user3);
employeeList.addEmployee(user4);



//

function getElement(id) {
    return document.getElementById(id);
}

function getInfoEmployee() {
    var _user = getElement("tknv").value;
    var _name = getElement("name").value;
    var _email = getElement("email").value;
    var _password = getElement("password").value;
    var _date = getElement("datepicker").value;
    var _salaryBasic = getElement("luongCB").value * 1;
    var _role = getElement("chucvu").value;
    var _workTime = getElement("gioLam").value * 1;

    var employee = new Employee({ _user, _name, _email, _password, _date, _salaryBasic, _role, _workTime });

    return employee
}

function renderTable(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var employee = data[i];
        content += `
        <tr>
        <td>${employee.user}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.date}</td>
        <td>${employee.role}</td>
        <td>${employee.salaryBasic}</td>
        <td>${employee.workTime}</td>
        </tr>  
        `;
    }
    getElement("tableDanhSach").innerHTML = content;
}
renderTable(employeeList.data);


getElement("btnThemNV").addEventListener("click", function () {
    var employee = getInfoEmployee();
    employeeList.addEmployee(employee);
    renderTable(employeeList.data)
})


