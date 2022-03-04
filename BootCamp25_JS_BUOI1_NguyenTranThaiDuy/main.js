// Bài 1 : Tính tiền lương của nhân viên


// Sơ đồ 3 khối 
//     Input: Nhập vào số ngày làm 
//     Xử lý : Tổng lương = số ngày làm * 100
//     Output : Tổng lương .

var day = 30;
var result = 30 * 100000;
console.log("Bai 1 : --Salary-- : ", result, "vnd");


// Bài 2 : Tính giá trị trung bình  

// Sơ đồ khối :

//     INPUT : nhập 5 số thực : number1,number2,number3.number4,number5 
//     Xử lý : Trung bình  = (number1+number2+number3+number4+number5)/5
//     OUTPUT : Kết quả trung binh 

var number1, number2, number3, number4, number5;
number1 = 1.25
number2 = 2.61
number3 = 6.8
number4 = 545.1
number5 = 1214653.1251

var resutl;
result = (number1 + number2 + number3 + number4 + number5) / 5;
console.log("Bai 2 : --Result-- : ", result);

// Bài 3 : Quy đổi tiền 

// Sơ đồ khối : 

//     INPUT : Số tiền dollar .
//     Xử lý : Số tiền vnd =  số tiền dollar * 23000
//     OUTPUT : Số tiền vnd

var moneyUSD;
moneyUSD = 2;
var moneyVND;
moneyVND = moneyUSD * 23500;
console.log("Bai 3 : --Result--: ", moneyVND, "VND");

// Bài 4 : Tính chu vi và diện tích hình chữ nhật 

// Sơ đồ khối :

//     INPUT : nhập chiều dài -cd , nhập chiều rộng-cr 
//     XỬ LÝ : chuvi = (cd+cr)*2
//             dientich = cd*cr
//     OUTPUT : Xuất kết quả chu vi và diện tích 


var cd, cr, s, p;
cd = 5;
cr = 6;
p = (cd + cr) * 2;
s = cd * cr;
console.log("Bai 4 : --Chu Vi--: ", p);
console.log("Bai 4 : --Dien tich--: ", s);


// Bài 5 : Tính tổng 2 ký số:

// Sơ đồ khối:

//     INPUT: NHẬP VAO 1 SỐ CÓ 2 CHỮ SỐ: n
//     Xử lý: lấy hàng đơn vị(dv): n % 10;
//             Lấy hàng chục(chuc): int(n / 10);
//             Tổng = dv + chuc
//     OUTPUT: XUAT KET QUA CUA TONG 


var n, dv, chuc, sum;
n = 99;
dv = n % 10;
chuc = parseInt(n / 10);
sum = dv + chuc;
console.log("Bai 5 : --Sum--: ", sum)