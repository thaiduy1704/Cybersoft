document.getElementById("btnResult1").onclick = function () {
    var number_1 = document.getElementById("number_1").value;
    var number_2 = document.getElementById("number_2").value;
    var number_3 = document.getElementById("number_3").value;
    var result;

    if ((number_1 <= number_2) && (number_2 <= number_3)) {
        result = "Result: " + number_1 + " " + number_2 + " " + number_3;

    } else if ((number_1 <= number_3) && (number_3 <= number_2)) {
        result = "Result: " + number_1 + " " + number_3 + " " + number_2;
    } else
        if ((number_2 <= number_1) && (number_1 <= number_3)) {
            result = "Result: " + number_2 + " " + number_1 + " " + number_3;
        } else if ((number_2 <= number_3) && (number_3 <= number_1)) {
            result = "Result: " + number_2 + " " + number_3 + " " + number_1;
        } else if ((number_3 <= number_1) && (number_1 <= number_2)) {
            result = "Result: " + number_3 + " " + number_1 + " " + number_2;
        } else {
            result = "Result: " + number_3 + " " + number_2 + " " + number_1;
        }
    document.getElementById("thongBao1").classList.add("thong-bao");
    document.getElementById("thongBao1").innerHTML = result;

};

document.getElementById("btnResult2").onclick = function () {
    var people = document.getElementById("people").value;
    var result;

    if (people == "Bố") {
        result = " Xin chào bố!";
    } else if (people == "Mẹ") {
        result = " Xin chào mẹ !";
    } else if (people == "Anh trai") {
        result = " Xin chào anh trai!";
    } else if (people == "Em gái") {
        result = " Xin chào em gái !";
    }

    document.getElementById("thongBao2").classList.add("thong-bao");
    document.getElementById("thongBao2").innerHTML = result;

}


document.getElementById("btnResult3").onclick = function () {
    var number_1 = document.getElementById("number1").value;
    var number_2 = document.getElementById("number2").value;
    var number_3 = document.getElementById("number3").value;
    var result;
    var countOdd = 0;
    var countEven = 0;

    if (number_1 % 2 == 0) {
        countEven += 1;
    } else {
        countOdd += 1;
    }

    if (number_2 % 2 == 0) {
        countEven += 1;
    } else {
        countOdd += 1;
    }

    if (number_3 % 2 == 0) {
        countEven += 1;
    } else {
        countOdd += 1;
    }

    result = "Có " + countEven + " số chẵn " + ";" + "  Có " + countOdd + " số lẻ"


    document.getElementById("thongBao3").classList.add("thong-bao");
    document.getElementById("thongBao3").innerHTML = result;




};
document.getElementById("btnResult4").onclick = function () {
    var a = document.getElementById("canh_1").value;
    var b = document.getElementById("canh_2").value;
    var c = document.getElementById("canh_3").value;
    var result;


    if ((a + b > c) || (a + c > b) || (b + c > a)) {
        result = "Đây là tam giác !";
        if ((a == b) && (b == c) && (c == a)) {
            result = "Đây là tam giác đều !";
        } else if ((a == b) || (b == c) || (c == a)) {
            result = "Đây là tam giác cân !";
        } else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) {
            result = "Đây là tam giác vuông !";
        } else if ((a != b) && (b != c) && (c != a)) {
            result = "Đây là tam giác thường !";
        }
    } else {
        result = "Đây không phải tam giác";
    }

    document.getElementById("thongBao4").classList.add("thong-bao");
    document.getElementById("thongBao4").innerHTML = result;

};


