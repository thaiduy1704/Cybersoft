// Create sample data

const data = [
    {
        _user: "thai",
        _name: "Thai Duy",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "04/07/2005",
        _salaryBasic: "2500000",
        _role: "Sếp",
        _workTime: "176",
    },
    {
        _user: "tuanloc2305",
        _name: "Tuan Loc",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "04/07/2015",
        _salaryBasic: "3500000",
        _role: "Trưởng phòng",
        _workTime: "160",
    },
    {
        _user: "levy1905",
        _name: "Le Vy",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "17/07/2006",
        _salaryBasic: "2500000",
        _role: "Nhân viên",
        _workTime: "192",
    },
    {
        _user: "thaiduy17042000",
        _name: "Thai Duy Minh",
        _email: "18520668@gm.uit.edu.vn",
        _password: "duy171900",
        _date: "04/07/2005",
        _salaryBasic: "2500000",
        _role: "Sếp",
        _workTime: "150",
    },
];

var employeeList = new EmployeeList();
var validation = new Validation();

var user1 = new Employee(data[0]);
var user2 = new Employee(data[1]);
var user3 = new Employee(data[2]);
var user4 = new Employee(data[3]);

employeeList.addEmployee(user1);
employeeList.addEmployee(user2);
employeeList.addEmployee(user3);
employeeList.addEmployee(user4);

for (var i = 0; i < employeeList.data.length; i++) {
    employeeList.data[i].finalRank();
    employeeList.data[i].finalSalary();
}

//
getLocalStorage();
function getElement(id) {
    return document.getElementById(id);
}
function convertDate(date) {
    var [month, day, year] = date.split("/");
    return `${day}/${month}/${year}`;
}

function getInfoEmployee(isCheckUnique = true) {
    var _user = getElement("tknv").value;
    var _name = getElement("name").value;
    var _email = getElement("email").value;
    var _password = getElement("password").value;
    var _date = convertDate(getElement("datepicker").value);

    var _salaryBasic = getElement("luongCB").value;
    var _role = getElement("chucvu").value;
    var _workTime = getElement("gioLam").value;

    var isValid = true;

    if (validation.checkEmpty(_user, "tbTKNV", true)) {
        isValid = false;
    } else if (validation.checkUser(_user, "tbTKNV")) {
        isValid = false;
    } else if (validation.checkNumberOfDigit(_user, "tbTKNV", 4, 6)) {
        isValid = false;
    } else if (isCheckUnique == true) {
        if (!validation.checkUniqueUser(_user, "tbTKNV", employeeList.data)) {
            isValid = false;
        }
    }

    if (validation.checkEmpty(_name, "tbTen")) {
        isValid = false;
    } else if (validation.checkValidName(_name, "tbTen")) {
        isValid = false;
    }

    if (validation.checkEmpty(_email, "tbEmail", true)) {
        isValid = false;
    } else if (validation.checkValidEmail(_email, "tbEmail")) {
        isValid = false;
    }

    if (validation.checkEmpty(_password, "tbMatKhau", true)) {
        isValid = false;
    } else if (validation.checkNumberOfDigit(_password, "tbMatKhau", 6, 10)) {
        isValid = false;
    } else if (validation.checkValidPassword(_password, "tbMatKhau")) {
        isValid = false;
    }

    if (validation.checkEmpty(_date, "tbNgay", true)) {
        isValid = false;
    } else if (validation.checkValidDate(_date, "tbNgay")) {
        isValid = false;
    }

    if (validation.checkEmpty(_salaryBasic, "tbLuongCB")) {
        isValid = false;
    } else if (validation.checkValidSalary(_salaryBasic, "tbLuongCB")) {
        isValid = false;
    }

    if (validation.checkEmpty(_role, "tbChucVu")) {
        isValid = false;
    } else if (validation.checkValidRole(_role, "tbChucVu")) {
        isValid = false;
    }

    if (validation.checkEmpty(_workTime, "tbGiolam", true)) {
        isValid = false;
    } else if (validation.checkValidWorkTime(_workTime, "tbGiolam")) {
        isValid = false;
    }

    if (isValid) {
        var employee = new Employee({
            _user,
            _name,
            _email,
            _password,
            _date,
            _salaryBasic,
            _role,
            _workTime,
        });

        employee.finalSalary();
        employee.finalRank();
        return employee;
    }
    return null;
}

function renderTable(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var employee = data[i];
        content += `
        <tr class = "border-bottom">
        <td>${employee.user}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.date}</td>
        <td>${employee.role}</td>
        <td>${employee.sumSalary}</td>
        <td>${employee.rank}</td>
        <td class="d-flex border-0"> <button class="btn btn-danger mr-1 " onclick="deleteEmploy('${employee.user}') ">Xóa</button><button class="btn btn-success" id="btnThem"
                    data-toggle="modal"
                    data-target="#myModal" onclick="updateEmploy('${employee.user}')">Sửa</button></td>
        </tr>
        `;
    }
    getElement("tableDanhSach").innerHTML = content;
}
renderTable(employeeList.data);

getElement("btnThemNV").addEventListener("click", function () {
    var employee = getInfoEmployee(true);
    employeeList.addEmployee(employee);
    renderTable(employeeList.data);
    setLocalStorage();
});

function deleteEmploy(user) {
    employeeList.deleteEmployee(user);
    renderTable(employeeList.data);
    setLocalStorage();
}
function updateEmploy(user) {
    var employee = employeeList.getInfoEmployee(user);

    getElement("tknv").value = employee.user;
    getElement("tknv").disabled = true;
    getElement("name").value = employee.name;
    getElement("email").value = employee.email;
    getElement("password").value = employee.password;
    getElement("datepicker").value = convertDate(employee.date);

    getElement("luongCB").value = employee.salaryBasic;
    getElement("chucvu").value = employee.role;
    getElement("gioLam").value = employee.workTime;
    renderTable(employeeList.data);
}
getElement("btnCapNhat").addEventListener("click", function () {
    var employee = getInfoEmployee(false);
    employeeList.updateEmployee(employee);
    renderTable(employeeList.data);
    setLocalStorage();
});
getElement("searchName").addEventListener("keyup", function () {
    var keyName = getElement("searchName").value;

    var findData = employeeList.findEmployeeByRank(keyName);
    renderTable(findData);
});

function setLocalStorage() {
    var dataString = JSON.stringify(employeeList.data);
    localStorage.setItem("EmployeeList", dataString);
}

function getLocalStorage() {
    var dataString = localStorage.getItem("EmployeeList");
    if (dataString) {
        var dataJson = JSON.parse(dataString);
        employeeList.data = dataJson;
        renderTable(employeeList.data);
    }
}
