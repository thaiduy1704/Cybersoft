var listOfArray = [];
var i = 0;
var temp_i = 0;
const soMang = document.getElementById("soMang")



function addSubArray() {
    listOfArray.push([])
    soMang.innerText = `Hiện tại có ${listOfArray.length} mảng`
}

function chooseSubArray(choice = 0) {
    temp_i = i;
    i = choice;
}

function sumSoDuong(array) {
    var sum = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

function countSoDuong(array) {
    var count = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            count += 1
        }
    }
    return count;

}

function findMin(array) {
    temp = array[0];
    for (var i = 0; i <= array.length; i++) {
        if (array[i] < temp) {
            temp = array[i]
        }
    }
    return temp;
}
function findMinDuong(array) {
    var temp;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            temp = array[i];
            break;
        }
    }
    for (var i = 0; i <= array.length; i++) {
        if ((array[i] > 0) && (array[i] < temp)) {
            temp = array[i]
        }
    }
    return temp;
}
function findEvenLast(array) {
    for (var i = array.length; i >= 0; i--) {
        if (array[i] % 2 == 0) {
            return array[i];
            break;
        }
    }
    return -1;
}
function hoanVi(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
    return array;
}
function sortTang(array) {
    return array.sort(function (a, b) {
        return a > b;
    });
}
function countSoNguyen(array) {
    var count = 0;
    for (var i = 0; i <= array.length; i++) {
        if (Number.isInteger(array[i])) {
            count += 1;

        }
    }
    return count;
}
function checkPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    var squareN = parseInt(Math.sqrt(n));
    for (var i = 2; i <= (squareN + 1); i++) {
        if (n % i == 0) {
            return false;
        }
    } return true;
}
function countSoAm(array) {
    var count = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] < 0) {
            count += 1
        }
    }
    return count;
}


document.getElementById("btnAddNumber").onclick = function () {
    var number = document.getElementById("txtNumber").value * 1;
    listOfArray[i].push(number);
    document.getElementById("thongbaoXuatMang").innerHTML = "Mảng gồm: " + listOfArray[i];
    document.getElementById("txtNumber").value = "";
}

document.getElementById("btnChooseArray").onclick = function () {
    var number = document.getElementById("chooseArray").value * 1;
    chooseSubArray(number)
    document.getElementById("thongbaoXuatMang").innerHTML = "Mảng gồm: " + listOfArray[i];
    soMang.innerText = `Hiện tại có ${listOfArray.length} mảng`
}

document.getElementById("btnAddArray").onclick = function () {
    addSubArray()
}



document.getElementById("btnSum").onclick = function () {
    result = "Tổng các số dương có trong mảng: " + sumSoDuong(listOfArray[i]);
    console.log(listOfArray[i]);
    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnCount").onclick = function () {
    result = "Số dương có trong mảng là: " + countSoDuong(listOfArray[i]) + " số";
    document.getElementById("thongbao").innerHTML = result;
}


document.getElementById("btnMin").onclick = function () {
    result = "Số nhỏ nhất có trong mảng là: " + findMin(listOfArray[i]);
    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnMinDuong").onclick = function () {

    result = "Số dương nhỏ nhất có trong mảng là: " + findMinDuong(listOfArray[i]);
    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnEvenLast").onclick = function () {
    result = "Số chẵn cuối cùng có trong mảng là: " + findEvenLast(listOfArray[i]);
    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnHoanVi").onclick = function () {
    var x = document.getElementById("txtViTri1").value * 1;
    var y = document.getElementById("txtViTri2").value * 1;
    result = "Mảng sau khi đổi chỗ là : " + hoanVi(listOfArray[i], x, y);
    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnSort").onclick = function () {
    result = "Mảng sau khi sắp xếp là : " + sortTang(listOfArray[i]);
    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnTimSoNguyenTo").onclick = function () {
    var result;
    for (var m = 0; m <= listOfArray[i].length; m++) {
        if ((listOfArray[i][m]) == 2) {
            result = "Số nguyên tố đầu tiên có trong mảng là: 2 "
            break;
        }
        else if (((listOfArray[i][m]) > 2) && (checkPrimeNumber(listOfArray[i][m]))) {
            result = "Số nguyên tố đầu tiên có trong mảng là " + listOfArray[i][m];
            break;
        }
    }

    document.getElementById("thongbao").innerHTML = result;
}
document.getElementById("btnSoSanh").onclick = function () {
    console.log("Submit");
    var result = "";
    var countAm = countSoAm(listOfArray[i]);
    var countDuong = countSoDuong(listOfArray[i]);
    if (countAm > countDuong) {
        result = "Số lượng số âm nhiều hơn số dương ( " + countAm + " > " + countDuong + " ) ";
    } else if (countAm < countDuong) {
        result = "Số lượng số âm bé hơn số dương ( " + countAm + " < " + countDuong + " ) ";
    } else {
        result = "Số lượng số âm = số lượng số dương ( " + countAm + " = " + countDuong + " ) ";
    }

    document.getElementById("thongbao").innerHTML = result;
}