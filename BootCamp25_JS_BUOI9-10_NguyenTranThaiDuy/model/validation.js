/* Validation : 
                -checkEmpty
                -checkNumberOfDigit(4-6)
                -checkValidPassword(6-10)
                -checkValidEmail
                -checkValidSalary
                -checkValidWorkTime
                -checkValidName

    Phát sinh : 
                -checkUser
                -checkValidDate
                -checkValidRole
                -checkUniqueUser
*/

function Validation() {
    this.checkEmpty = function (value, divId, isCheckWhiteSpace = false) {
        if (value === "") {
            getElement(divId).innerHTML = "(*)Vui lòng không để trống";
            getElement(divId).style.display = "block";
            return true;
        } else if (/\s/g.test(value) && isCheckWhiteSpace) {
            getElement(divId).innerHTML = "(*)Vui lòng không để khoảng trắng";
            getElement(divId).style.display = "block";
            return true;
        }
        getElement(divId).style.display = "none";
        return false;
    };

    this.checkUser = function (value, divId) {
        var regex = /^[0-9]+$/;
        if (regex.test(value)) {
            getElement(divId).style.display = "none";
            return false;

        } else {
            getElement(divId).innerHTML = `(*)Vui lòng chỉ có số`;
            getElement(divId).style.display = "block";
            return true;
        }


    }
    this.checkNumberOfDigit = function (value, divId, start, end) {
        var count = value.trim().length;
        if (count < start || count > end) {
            getElement(divId).innerHTML = `(*)Vui lòng có từ ${start} - ${end} ký tự`;
            getElement(divId).style.display = "block";
            return true;
        } else {
            getElement(divId).style.display = "none";
            return false;
        }
    };
    this.checkValidName = function (value, divId) {
        var regex = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if (regex.test(value)) {
            getElement(divId).style.display = "none";
            return false;
        } else {
            getElement(divId).innerHTML = "(*)Vui lòng chỉ có ký tự ";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkValidEmail = function (value, divId) {
        var regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (regex.test(value)) {
            getElement(divId).style.display = "none";
            return false;
        } else {
            getElement(divId).innerHTML = "(*)Vui lòng nhập đúng dạng email ";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkValidPassword = function (value, divId) {
        var regex =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (regex.test(value)) {
            getElement(divId).style.display = "none";
            return false;
        } else {
            getElement(divId).innerHTML =
                "(*)Mật khẩu chứa ít nhất 1 ký tự in Hoa 1 chữ số và 1 ký tự đặc biệt";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkValidDate = function (value, divId) {
        var regex = /^\d{2}\/\d{2}\/\d{4}$/;

        if (value.match(regex) === null) {
            getElement(divId).innerHTML =
                "(*)Vui lòng nhập đúng định dạng ngày 'MM/DD/YYYY'";
            getElement(divId).style.display = "block";
            return true;
        }

        const parts = value.split("/");
        const day = parseInt(parts[1], 10);
        const month = parseInt(parts[0], 10);
        const year = parseInt(parts[2], 10);

        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
            getElement(divId).innerHTML =
                "(*)Vui lòng nhập đúng định dạng ngày 'MM/DD/YYYY'";
            getElement(divId).style.display = "block";
            return true;
        }

        const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            monthLength[1] = 29;
        }

        if (day > 0 && day <= monthLength[month - 1]) {
            return false
        } else {
            getElement(divId).innerHTML =
                "(*)Vui lòng nhập đúng Ngày'";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkValidSalary = function (value, divId) {
        var salary = parseInt(value);
        if (1000000 <= salary && salary <= 20000000) {
            return false;
        } else {
            getElement(divId).innerHTML =
                "(*)Tiền lương chỉ từ 1.000.000 - 20.000.000s";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkValidRole = function (value, divId) {
        if (value == "Sếp" || value == "Trưởng phòng" || value == "Nhân viên") {
            return false;
        } else {
            getElement(divId).innerHTML = "(*)Vui lòng chọn chức vụ ";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkValidWorkTime = function (value, divId) {
        var workTime = parseInt(value);
        if (workTime >= 80 && workTime <= 200) {
            return false;
        } else {
            getElement(divId).innerHTML = "(*)Thời gian chỉ từ 80-200h";
            getElement(divId).style.display = "block";
            return true;
        }
    };
    this.checkUniqueUser = function (value, divId, arr) {
        for (var i = 0; i < arr.length; i++) {
            var employee = arr[i];
            if (value === employee.user) {
                getElement(divId).innerHTML =
                    "(*)Tài khoản bị trùng";
                getElement(divId).style.display = "block";
                return false;


            }
        }
        return true;
    }
}
