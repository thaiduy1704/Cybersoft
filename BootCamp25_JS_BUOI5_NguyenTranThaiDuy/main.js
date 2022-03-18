// BAI 1 


var scoreDefault = 0;
var scoreObject_1 = 0;
var scoreObject_2 = 0;
var scoreObject_3 = 0;
var priorityObject = 0;
var priorityArea = "";

function sumScoreObject(scoreObject_1, scoreObject_2, scoreObject_3) {
    return scoreObject_1 + scoreObject_2 + scoreObject_3;
}

function getPriorityScore(priorityObject, priorityArea) {
    var sumPriorityScore = 0;

    switch (priorityObject) {
        case 0:
            sumPriorityScore = 0;
            break;
        case 1:
            sumPriorityScore = 2.5;
            break;
        case 2:
            sumPriorityScore = 1.5;
            break;
        case 3:
            sumPriorityScore = 1;
            break;

        default:
            console.log("Invalid Priority Object")
            break;
    }
    switch (priorityArea) {
        case "X":
            sumPriorityScore += 0
            break;
        case "A":
            sumPriorityScore += 2
            break;
        case "B":
            sumPriorityScore += 1
            break;
        case "C":
            sumPriorityScore += 0.5
            break;

        default:
            console.log("Invalid Priority Area")
            break;
    }
    return sumPriorityScore;
}



document.getElementById("btnResult").onclick = function () {
    scoreDefault = document.getElementById("txtDiemChuan").value * 1;
    scoreObject_1 = document.getElementById("txtDiemMon1").value * 1;
    scoreObject_2 = document.getElementById("txtDiemMon2").value * 1;
    scoreObject_3 = document.getElementById("txtDiemMon3").value * 1;
    priorityObject = document.getElementById("object").value * 1;
    priorityArea = document.getElementById("area").value;

    if ((scoreObject_1 < 0) || (scoreObject_1 > 10) || (scoreObject_2 < 0) || (scoreObject_2 > 10) || (scoreObject_3 < 0) || (scoreObject_3 > 10)) {
        alert("Nhập sai cú pháp điểm môn học ")
    } else {



        var sumScoreStudent = sumScoreObject(scoreObject_1, scoreObject_2, scoreObject_3) + getPriorityScore(priorityObject, priorityArea);
        var result;

        if ((scoreObject_1 > 0) && (scoreObject_2 > 0) && (scoreObject_3 > 0) && (sumScoreStudent >= scoreDefault)) {
            result = "Bạn đã" + "<b> trúng</b>" + " tuyển và số điểm tổng kết của bạn là : " + sumScoreStudent;
        } else {
            result = "Bạn đã" + "<b> trượt</b>" + " và số điểm tổng kết của bạn là : " + sumScoreStudent;
        }

        document.getElementById("footerXetTuyen").innerHTML = result;
    }


}

// Bai 2 : 

var soKw = 0;
const KWH_1 = 500;
const KWH_2 = 650;
const KWH_3 = 850;
const KWH_4 = 1100;
const KWH_5 = 1300;

var moneyKw_1 = 0;
var moneyKw_2 = 0;
var moneyKw_3 = 0;
var moneyKw_4 = 0;
var moneyKw_5 = 0;
var sumMoney = 0;

// 50
// 50-100
// 100-200
// 200-350
// 350
function tinhKWH_1(soKw, giaKw) {
    return soKw * giaKw;
}
function tinhKWH_2(soKw, giaKw) {

    return (soKw - 50) * giaKw;
}
function tinhKWH_3(soKw, giaKw) {

    return (soKw - 100) * giaKw;
}
function tinhKWH_4(soKw, giaKw) {

    return (soKw - 200) * giaKw;
}
function tinhKWH_5(soKw, giaKw) {

    return (soKw - 350) * giaKw;
}
function sumChiTiet(soKw, giaKw_1, giaKw_2, giaKw_3, giaKw_4, giaKw_5) {
    if ((soKw > 0) && (soKw <= 50)) {

        moneyKw_1 = tinhKWH_1(soKw, giaKw_1);
        sumMoney = moneyKw_1;

    } else if ((soKw > 50) && (soKw <= 100)) {

        moneyKw_1 = tinhKWH_1(50, giaKw_1);
        moneyKw_2 = tinhKWH_2(soKw, giaKw_2);
        sumMoney = moneyKw_1 + moneyKw_2;
    } else if ((soKw > 100) && (soKw <= 200)) {

        moneyKw_1 = tinhKWH_1(50, giaKw_1);
        moneyKw_2 = tinhKWH_2(100, giaKw_2);
        moneyKw_3 = tinhKWH_3(soKw, giaKw_3);
        sumMoney = moneyKw_1 + moneyKw_2 + moneyKw_3;
    } else if ((soKw > 200) && (soKw <= 350)) {

        moneyKw_1 = tinhKWH_1(50, giaKw_1);
        moneyKw_2 = tinhKWH_2(100, giaKw_2);
        moneyKw_3 = tinhKWH_3(200, giaKw_3);
        moneyKw_4 = tinhKWH_4(soKw, giaKw_4);
        sumMoney = moneyKw_1 + moneyKw_2 + moneyKw_3 + moneyKw_4;
    } else if (soKw > 350) {
        moneyKw_1 = tinhKWH_1(50, giaKw_1);
        moneyKw_2 = tinhKWH_2(100, giaKw_2);
        moneyKw_3 = tinhKWH_3(200, giaKw_3);
        moneyKw_4 = tinhKWH_4(350, giaKw_4);
        moneyKw_5 = tinhKWH_5(soKw, giaKw_5);
        sumMoney = moneyKw_1 + moneyKw_2 + moneyKw_3 + moneyKw_4 + moneyKw_5;
    }
    return sumMoney;

}

document.getElementById("btnTinhTien").onclick = function () {
    soKw = document.getElementById("txtSoKw").value * 1;

    var userName = document.getElementById("txtUserName").value;

    var result = " Chủ hộ  " + userName + " " + " cần phải trả số tiền:  " + sumChiTiet(soKw, KWH_1, KWH_2, KWH_3, KWH_4, KWH_5) + " cho hóa đơn tiền điện";

    document.getElementById("footerTinhTien").innerHTML = result;
}