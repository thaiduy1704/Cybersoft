var services = new Services();
var peopleList = new PeopleList();
var validation = new Validation();

function getElement(id) {
    return document.getElementById(id);
}


function getListPeople() {
    services.fetchData()
        .then(function (result) {
            renderTableList(result.data)
        })
        .catch(function (error) {
            console.log(error);
        })

}
getListPeople();




function renderTableList(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var people = data[i];
        content += `
        <tr>
            <td>${i + 1}</td>
            <td>${people.taiKhoan}</td>
            <td>${people.matKhau}</td>
            <td>${people.hoTen}</td>
            <td>${people.email}</td>
            <td>${people.ngonNgu}</td>
            <td>${people.loaiND}</td>
            <td>  
            <button class="btn btn-success"data-toggle="modal"
                data-target="#myModal" onclick="updatePeople(${people.id})">-</button>
            <button class="btn btn-danger" onclick="deletePeople(${people.id})">X</button>
            </td>
        </tr>
        `
        peopleList.list.push(data[i])
    }
    getElement("tblDanhSachNguoiDung").innerHTML = content;


}


// Delete People 
function deletePeople(id) {

    services.deletePeopleById(id)
        .then(function (result) {
            getListPeople();
        })
        .catch(function (error) {
            console.log(error);
        })

}

getElement("btnThemNguoiDung").addEventListener("click", function () {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm người dùng"

    var footer = `<button class="btn btn-success" onclick ="addPeople()">Add</button>`

    document.getElementsByClassName("modal-footer")[0].innerHTML = footer
})



function addPeople() {


    var user = getElement("TaiKhoan").value;
    var name = getElement("HoTen").value;
    var password = getElement("MatKhau").value;
    var email = getElement("Email").value;
    var image = getElement("HinhAnh").value;
    var typeUser = getElement("loaiNguoiDung").value;
    console.log(typeUser);
    var typeLanguage = getElement("loaiNgonNgu").value;
    var describe = getElement("MoTa").value;
    var isValid = true;

    if (validation.checkEmpty(user, "tbTaiKhoan", true)) {
        isValid = false;
    } else if (!validation.checkUniqueUser(user, "tbTaiKhoan", peopleList.list)) {
        isValid = false;
    }

    if (validation.checkEmpty(name, "tbHoTen")) {
        isValid = false;
    } else if (validation.checkValidName(name, "tbHoTen")) {
        isValid = false;
    }


    if (validation.checkEmpty(email, "tbEmail")) {
        isValid = false;
    }
    else if (validation.checkValidEmail(email, "tbEmail")) {
        isValid = false;
    }

    if (validation.checkEmpty(password, "tbPass", true)) {
        isValid = false;

    } else if (validation.checkNumberOfDigit(password, "tbPass", 6, 8)) {
        isValid = false;
    }
    else if (validation.checkValidPassword(password, "tbPass")) {
        isValid = false;
    }

    if (validation.checkEmpty(image, "tbImage", true)) {
        isValid = false;
    }

    if (validation.checkValueSelect(typeUser, "tbLoaiND", "Chọn loại người dùng")) {
        isValid = false;
    }
    if (validation.checkValueSelect(typeLanguage, "tbNgonNgu", "Chọn ngôn ngữ")) {
        isValid = false;
    }

    if (validation.checkEmpty(describe, "tbDescribe")) {
        isValid = false
    } else if (validation.checkNumberOfDigit(describe, "tbDescribe", 1, 60)) {
        isValid = false;
    }




    if (isValid) {

        var people = new People("", user, name, password, email, typeUser, typeLanguage, describe, image);


        services.postPeople(people)
            .then(function (result) {
                getListPeople();
                // Close PopUp Add
                document.getElementsByClassName("close")[0].click();
            })
            .catch(function (error) {
                console.log(error)
            })

        return people
    }
    return null




}

function updatePeople(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa người dùng"

    var footer = `<button class="btn btn-success" onclick ="update(${id})">Update</button>`

    document.getElementsByClassName("modal-footer")[0].innerHTML = footer


    services.getPeopleById(id)
        .then(function (result) {
            getElement("TaiKhoan").value = result.data.taiKhoan;
            getElement("HoTen").value = result.data.hoTen;
            getElement("MatKhau").value = result.data.matKhau;
            getElement("Email").value = result.data.email;
            getElement("HinhAnh").value = result.data.hinhAnh;
            getElement("loaiNguoiDung").value = result.data.loaiND;
            getElement("loaiNgonNgu").value = result.data.ngonNgu;
            getElement("MoTa").value = result.data.moTa;

        })
        .catch(function (error) {

        })




}

function update(id) {
    var user = getElement("TaiKhoan").value;
    var name = getElement("HoTen").value;
    var password = getElement("MatKhau").value;
    var email = getElement("Email").value;
    var image = getElement("HinhAnh").value;
    var typeUser = getElement("loaiNguoiDung").value;
    var typeLanguage = getElement("loaiNgonNgu").value;
    var describe = getElement("MoTa").value;
    var isValid = true;


    if (validation.checkEmpty(user, "tbTaiKhoan", true)) {
        isValid = false;
    }
    if (validation.checkEmpty(name, "tbHoTen")) {
        isValid = false;
    } else if (validation.checkValidName(name, "tbHoTen")) {
        isValid = false;
    }


    if (validation.checkEmpty(email, "tbEmail")) {
        isValid = false;
    }
    else if (validation.checkValidEmail(email, "tbEmail")) {
        isValid = false;
    }

    if (validation.checkEmpty(password, "tbPass", true)) {
        isValid = false;

    } else if (validation.checkNumberOfDigit(password, "tbPass", 6, 8)) {
        isValid = false;
    }
    else if (validation.checkValidPassword(password, "tbPass")) {
        isValid = false;
    }

    if (validation.checkEmpty(image, "tbImage", true)) {
        isValid = false;
    }

    if (validation.checkValueSelect(typeUser, "tbLoaiND", "Chọn loại người dùng")) {
        isValid = false;
    }
    if (validation.checkValueSelect(typeLanguage, "tbNgonNgu", "Chọn ngôn ngữ")) {
        isValid = false;
    }

    if (validation.checkEmpty(describe, "tbDescribe")) {
        isValid = false
    } else if (validation.checkNumberOfDigit(describe, "tbDescribe", 1, 60)) {
        isValid = false;
    }


    if (isValid) {

        var people = new People(id, user, name, password, email, typeUser, typeLanguage, describe, image);
        services.putPeople(people)
            .then(function (result) {
                getListPeople()
                document.getElementsByClassName("close")[0].click();

            })
            .catch(function (error) {

            })

        return people;
    }
    return null



}