// BÀI 1 : SẮP XẾP TĂNG DẦN

// INPUT : Nhập giá trị 3 số number_1,  number_2 ,number_3 từ người dùng

// Xử lý :
//         Kiểm tra  6 trường hợp so sánh giữa 3 số rồi sắp xếp 
//         Trả kết quả cho biến result
//         Gán resukl vào thong báo 

// OUTPUT : Xuất kết quả sắp xếp ra màn hình 


document.getElementById("btnResult1").onclick = function () {
    var number_1 = document.getElementById("number_1").value;
    var number_2 = document.getElementById("number_2").value;
    var number_3 = document.getElementById("number_3").value;
    var result;

    if ((number_1 <= number_2) && (number_2 <= number_3)) {
        result = "Result: " + number_1 + " -> " + number_2 + " -> " + number_3;

    } else if ((number_1 <= number_3) && (number_3 <= number_2)) {
        result = "Result: " + number_1 + " -> " + number_3 + " -> " + number_2;
    } else
        if ((number_2 <= number_1) && (number_1 <= number_3)) {
            result = "Result: " + number_2 + " -> " + number_1 + " -> " + number_3;
        } else if ((number_2 <= number_3) && (number_3 <= number_1)) {
            result = "Result: " + number_2 + " -> " + number_3 + " -> " + number_1;
        } else if ((number_3 <= number_1) && (number_1 <= number_2)) {
            result = "Result: " + number_3 + " -> " + number_1 + " -> " + number_2;
        } else {
            result = "Result: " + number_3 + " -> " + number_2 + " -> " + number_1;
        }
    document.getElementById("thongBao1").classList.add("thong-bao");
    document.getElementById("thongBao1").innerHTML = result;

};
// BÀI 2 : CHƯƠNG TRÌNH CHÀO HỎI

// INPUT :chọn người sử dụng máy tính từ người dùng

// Xử lý :
//         Xét 4 trường hợp và đưa kết quả theo 4 trường hợp.
//         Trả kết quả cho biến result
//         Gán resukl vào thong báo 

// OUTPUT : Xuất kết quả ra màn hình 


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

// BÀI 3 : ĐẾM SỐ CHẴN LẺ

// INPUT : Nhập 3 số nguyên từ người dùng 


// Xử lý :
//         Xét 2 trường hợp nếu chắn thì biến count even tăng lên 1 ngược lại 
//        biến count odd tăng lên 1 
//         Trả kết quả cho biến result
//         Gán resukl vào thong báo 

// OUTPUT : Xuất kết quả ra màn hình 




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

// BÀI 4 : KIỂM TRA TAM GIÁC 

// INPUT : Nhập 3 cạnh tam giác từ người dùng


// Xử lý :
// if(Đúng là 3 cạnh tam giác) 
// -> if(3 cạnh bằng nhau) ? tam giác đều; 
//    else if(2 cạnh bằng nhau) ? tam giác cân;
//    else if(pytago) ? tam giác vuông;
//    else if(3 cạnh không bằng nhau) ? tam giác thường; 
// else(Không phải 3 cạnh tam giác) : Báo sai

// gán result vào biến thông báo

// OUTPUT : Xuất kết quả ra màn hình 

document.getElementById("btnResult4").onclick = function () {
    var a = document.getElementById("canh_1").value;
    var b = document.getElementById("canh_2").value;
    var c = document.getElementById("canh_3").value;
    var result;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);


    if ((a + b > c) || (a + c > b) || (b + c > a)) {

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


