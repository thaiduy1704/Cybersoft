// Function :          -checkUserName  
//                     -checkName
//                     -checkPassworder
//                     -checkEmail
//                     -checkImage
//                     -checkTypeUser
//                     -checkTypeLanguage
//                     -checkDescribe
//    -checkEmpty

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
    this.checkUniqueUser = function (value, divId, arr) {
        for (var i = 0; i < arr.length; i++) {
            var people = arr[i];
            if (value === people.taiKhoan) {
                getElement(divId).innerHTML =
                    "(*)Tài khoản bị trùng";
                getElement(divId).style.display = "block";
                return false;
            }
        }
        return true;
    }
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
    this.checkValueSelect = function (value, divId, defautMess) {
        if (value == defautMess) {

            getElement(divId).innerHTML =
                "(*)Vui lòng chọn giá trị ";
            getElement(divId).style.display = "block";
            return true;
        } else {
            return false;
        }

    }

}