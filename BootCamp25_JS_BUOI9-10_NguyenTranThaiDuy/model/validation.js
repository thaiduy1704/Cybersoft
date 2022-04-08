/* Validation : 
                -checkEmpty
                -checkNumberOfDigit(4-6)
                -checkValidPassword(6-10)
                -checkValidEmail
                -checkValidSalary
                -checkValidWorkTime
                -checkValidName

    Phát sinh : 
                -checkValidDate
                -checkValidRole
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
        if (/^[A-Z ]+$/i.test(value)) {
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
        var regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (value.match(regex) === null) {
            return true;
        }
        var [month, day, year] = value.split("/");

        var isoFormattedStr = `${year}-${month}-${day}`;

        var date = new Date(isoFormattedStr);
        var timestamp = date.getTime();

        if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
            getElement(divId).innerHTML =
                "(*)Vui lòng nhập đúng định dạng ngày 'MM/DD/YY'";
            getElement(divId).style.display = "block";
            return true;

        } else if (date.toISOString().startsWith(isoFormattedStr)) {
            return false;
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
}
