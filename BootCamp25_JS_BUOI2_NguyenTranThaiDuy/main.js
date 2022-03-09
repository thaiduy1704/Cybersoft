// Bài 1 : Tính tiền lương của nhân viên


// Sơ đồ 3 khối 
//     Input: Nhập vào số ngày làm 
//     Xử lý : Lấy giá trị ngày làm của user 
//             Tổng lương = số ngày làm * 100
//             Gán tổng lương vào thông báo .
//     Output : Tổng lương .




document.getElementById("btnResult_1").onclick = function () {
    var day = document.getElementById("day").value;
    day = parseInt(day);
    var result = "So tien luong la : " + (day * 100000) + " vnd";
    document.getElementById("thongBao1").innerHTML = result;
    document.getElementById("thongBao1").classList.add("thong__bao--1");
}

// Bài 2 : Tính giá trị trung bình  

// Sơ đồ khối :

//     INPUT : nhập 5 số thực : number1,number2,number3.number4,number5 

//     Xử lý : Lấy 5 giá trị vừa nhập vào
//              Trung bình  = (number1+number2+number3+number4+number5)/5
//              gán trung bình vào thông báo 
//     OUTPUT : Kết quả trung binh 

document.getElementById("btnResult_2").onclick = function () {
    var number_1, number_2, number_3, number_4, number_5, result;
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    number_3 = document.getElementById("number_3").value;
    number_4 = document.getElementById("number_4").value;
    number_5 = document.getElementById("number_5").value;
    number_1 = parseFloat(number_1);
    number_2 = parseFloat(number_2);
    number_3 = parseFloat(number_3);
    number_4 = parseFloat(number_4);
    number_5 = parseFloat(number_5);
    result = "Gia tri trung binh la : " + (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
    document.getElementById("thongBao2").innerHTML = result;
    document.getElementById("thongBao2").classList.add("thong__bao--1");

}


// Bài 3 : Quy đổi tiền 

// Sơ đồ khối : 

// INPUT : Số tiền dollar .
// Xử lý : 
//         Lấy giá trị tiền dollar của user
//         Số tiền vnd =  số tiền dollar * 23000
//         Gán số tiền vnd vào thông báo 
// OUTPUT : Số tiền vnd



document.getElementById("btnResult_3").onclick = function () {
    var money = document.getElementById("money").value;
    money = parseFloat(money);
    var result = "So tien quy doi la  : " + (money * 23500) + " vnd";
    document.getElementById("thongBao3").innerHTML = result;
    document.getElementById("thongBao3").classList.add("thong__bao--1");
}

// Bài 4 : Tính chu vi và diện tích hình chữ nhật 

// Sơ đồ khối :

// INPUT : nhập chiều dài -cd , nhập chiều rộng-cr 
// XỬ LÝ : lấy giá trị chiều dài và chiều rộng của user
//          chuvi = (cd+cr)*2
//         dientich = cd*cr
//         Gán giá trị chu vi và diện tích vào thông báo
// OUTPUT : Xuất kết quả chu vi và diện tích 




document.getElementById("btnResult_4").onclick = function () {
    var width = document.getElementById("width").value;
    width = parseFloat(width);
    var length = document.getElementById("length").value;
    length = parseFloat(length);
    var p = (width + length) * 2;
    var s = width * length;
    var result = "Chu vi la : " + p + "  " + "-------" + "    Dien tich la : " + s;
    document.getElementById("thongBao4").innerHTML = result;
    document.getElementById("thongBao4").classList.add("thong__bao--1");
}

// Bài 5 : Tính tổng 2 ký số:

// Sơ đồ khối:

// INPUT: NHẬP VAO 1 SỐ CÓ 2 CHỮ SỐ: n
// Xử lý: 
//         lấy giá trị số tự nhiên của user
//         lấy hàng đơn vị(dv): n % 10;
//         Lấy hàng chục(chuc): int(n / 10);
//         Tổng = dv + chuc
//         Gán tổng vào thông báo 
// OUTPUT: XUAT KET QUA CUA TONG 




document.getElementById("btnResult_5").onclick = function () {
    var number, chuc, donvi;
    number = document.getElementById("number").value;
    number = parseInt(number);
    donvi = number % 10;
    chuc = Math.floor(number / 10);
    result = "Ket qua : " + (chuc + donvi);
    document.getElementById("thongBao5").innerHTML = result;
    document.getElementById("thongBao5").classList.add("thong__bao--1");
}