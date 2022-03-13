// BÀI 1 : TÍNH NGÀY TRƯỚC VÀ NGÀY SAU

// INPUT : NHẬP GIÁ TRỊ NGÀY THÁNG NĂM CỦA NGƯỜI DÙNG

// XỬ LÝ : Đếm trong tháng đó bao nhiêu ngày 
//         (Chú ý tháng 2 có nhuần hay không)
//         ngày tiếp theo = ngày + 1 
//         -> nếu ngày > số ngày trong tháng ->
//         ngày tiếp theo =ngày +1  và tháng tiếp theo = tháng + 1
//         -> tháng mà lớn hơn 12 thì tháng tiếp theo là 1 và năm tiếp theo = năm +1
//         gán giá trị result vào thông báo 

// OUTPUT : Xuất kết quả ngày tiếp theo ra màn hình 






document.getElementById("btnResult1NextDay").onclick = function () {
    var date = document.getElementById("txtDay").value.split("-");

    var year = date[0];
    var month = date[1];
    var day = date[2];

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    var newDay, newMonth, newYear;

    newDay = day;
    newMonth = month;
    newYear = year;



    var demNgay;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            demNgay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            demNgay = 30;
            break;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                demNgay = 29;
            }
            else {
                demNgay = 28;
            }
            break;


    }


    newDay++;
    if (newDay > demNgay) {
        newDay = 1;
        newMonth++;
        if (newMonth > 12) {
            newMonth = 1;
            newYear++;
        }
    }



    result = newDay + "/" + newMonth + "/" + newYear;

    document.getElementById("thongBao1").classList.add("thong-bao");
    document.getElementById("thongBao1").innerHTML = result;


}

// BÀI 1 : TÍNH NGÀY TRƯỚC VÀ NGÀY SAU

// INPUT : NHẬP GIÁ TRỊ NGÀY THÁNG NĂM CỦA NGƯỜI DÙNG

// XỬ LÝ : Đếm trong tháng đó bao nhiêu ngày 
//         (Chú ý tháng 2 có nhuần hay không)
//         ngày trước = ngày -1
//         -> nếu ngày trước  = 0 ->
//         ngày trước = số đếm ngày của tháng trước  và tháng trước = tháng -1
//         -> tháng  = 0  thì tháng trước là 12 và năm trước = năm -1 ngày trước = số đếm ngày của tháng 12 năm trước.
//         gán giá trị result vào thông báo 

// OUTPUT : Xuất kết quả ngày trước ra màn hình 

document.getElementById("btnResult1PreDay").onclick = function () {
    var date = document.getElementById("txtDay").value.split("-");

    var year = date[0];
    var month = date[1];
    var day = date[2];

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    var newDay, newMonth, newYear;

    newDay = day;
    newMonth = month;
    newYear = year;



    var demNgay;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            demNgay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            demNgay = 30;
            break;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                demNgay = 29;
            }
            else {
                demNgay = 28;
            }
            break;


    }


    newDay--;
    if (newDay == 0) {
        newMonth--;
        if (newMonth == 0) {
            newMonth = 12;
            newYear--;
        }

        newDay = demNgay;
    }



    result = newDay + "/" + newMonth + "/" + newYear;

    document.getElementById("thongBao1").classList.add("thong-bao");
    document.getElementById("thongBao1").innerHTML = result;


}
// BÀI 2 : THÁNG ĐÓ CÓ BAO NHIÊU NGÀY

// INPUT : NHẬP GIÁ TRỊ THÁNG NĂM CỦA NGƯỜI DÙNG

// XỬ LÝ : Đếm trong tháng đó bao nhiêu ngày 
//         (Chú ý tháng 2 có nhuần hay không)
//         
//         gán giá trị result vào thông báo 

// OUTPUT : Xuất kết quả  ra màn hình 

document.getElementById("btnResult2").onclick = function () {
    var thang = document.getElementById("txtThang").value;
    var nam = document.getElementById("txtNam").value;

    thang = parseInt(thang);
    nam = parseInt(nam);
    var result;
    if ((thang < 0) || (thang > 12) || (nam < 0)) {
        result = "Xin moi nhap lai"

    } else {
        switch (thang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                result = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                result = 30;
                break;
            case 2:
                if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
                    result = 29;
                } else {
                    result = 28;
                }
                break;


        }

    }


    document.getElementById("thongBao2").classList.add("thong-bao");
    document.getElementById("thongBao2").innerHTML = result;



}
// BÀI 3 : CÁCH ĐỌC SỐ
// INPUT : NHẬP SỐ CÓ 3 CHỮ SỐ TỪ NGƯỜI DÙNG 

// XỬ LÝ  : TÁCH HÀNG ĐƠN VỊ , HÀNG CHỤC , HÀNG TRĂM ,
//         SỬ DỤNG SWITCH CASE CHO CÁCH ĐỌC  9 TRƯỜNG HỢP CỦA HÀNG ĐƠN VỊ
//         SỬ DỤNG SWITCH CASE CHO CÁCH ĐỌC  9 TRƯỜNG HỢP CỦA HÀNG CHỤC
//         SỬ DỤNG SWITCH CASE CHO CÁCH ĐỌC  9 TRƯỜNG HỢP CỦA HÀNG TRĂM

//         gán giá trị result vào thông báo 
// OUTPUT : Xuất kết quả  ra màn hình 



document.getElementById("btnResult3").onclick = function () {
    var number = document.getElementById("txtNumber").value;
    var result;
    var tram, chuc, donvi;
    var docTram, docChuc, docDonvi;
    if ((number < 100) || (number > 999)) {
        result = "Hãy nhập số có 3 chữ số !"

    } else {
        donvi = (number % 10);
        chuc = Math.floor((number / 10) % 10);
        tram = Math.floor(number / 100);

        switch (tram) {
            case 1: docTram = "Một trăm "; break;
            case 2: docTram = "Hai trăm "; break;
            case 3: docTram = "Ba trăm "; break;
            case 4: docTram = "Bốn trăm "; break;
            case 5: docTram = "Năm trăm "; break;
            case 6: docTram = "Sáu trăm "; break;
            case 7: docTram = "Bảy trăm "; break;
            case 8: docTram = "Tám trăm "; break;
            case 9: docTram = "Chín trăm "; break;
        }
        switch (chuc) {
            case 0: docChuc = "lẻ"; break;
            case 1: docChuc = "mười "; break;
            case 2: docChuc = "hai mươi "; break;
            case 3: docChuc = "ba mươi "; break;
            case 4: docChuc = "bốn mươi "; break;
            case 5: docChuc = "năm mươi "; break;
            case 6: docChuc = "sáu mươi "; break;
            case 7: docChuc = "bảy mươi "; break;
            case 8: docChuc = "tám mươi "; break;
            case 9: docChuc = "chín mươi "; break;
        }
        switch (donvi) {

            case 1: docDonvi = "một"; break;
            case 2: docDonvi = "hai"; break;
            case 3: docDonvi = "ba"; break;
            case 4: docDonvi = "tư"; break;
            case 5: docDonvi = "lăm"; break;
            case 6: docDonvi = "sáu"; break;
            case 7: docDonvi = "bảy"; break;
            case 8: docDonvi = "tám"; break;
            case 9: docDonvi = "chín"; break;
        }


        result = docTram + " " + docChuc + " " + docDonvi + " !"

    }
    document.getElementById("thongBao3").classList.add("thong-bao");
    document.getElementById("thongBao3").innerHTML = result;
}
// BÀI 4 :   TÌM TÊN SINH VIÊN XA TRƯỜNG NHẤT
// INPUT: NHập tên và tọa độ của 3 sinh viên và trường đại học

// XỬ LÝ: Tính khoảng cách từ trường đến từng sinh viên. (khoảng cách 2 điểm trong tọa độ)
//         So sánh các khoảng cách với nhau, cái nào lớn nhất -> xa nhất
// result = tên sinh viên có khoảng cách lơn nhất.
//         gán giá trị result vào thông báo

// Output: Xuất tên sinh viên xa trường nhất ra màn hình.


document.getElementById("btnResult4").onclick = function () {
    var name_1 = document.getElementById("txtName1").value;
    var name_2 = document.getElementById("txtName2").value;
    var name_3 = document.getElementById("txtName3").value;
    var nameSchool = document.getElementById("txtSchool").value;
    var x1 = document.getElementById("txtToaDoX1").value;
    var x2 = document.getElementById("txtToaDoX2").value;
    var x3 = document.getElementById("txtToaDoX3").value;
    var xSchool = document.getElementById("txtToaDoX4").value;
    var y1 = document.getElementById("txtToaDoY1").value;
    var y2 = document.getElementById("txtToaDoY2").value;
    var y3 = document.getElementById("txtToaDoY3").value;
    var ySchool = document.getElementById("txtToaDoY4").value;
    var result;

    var dist_1, dist_2, dist_3;
    dist_1 = Math.sqrt((xSchool - x1) * (xSchool - x1) + (ySchool - y1) * (ySchool - y1));
    dist_2 = Math.sqrt((xSchool - x2) * (xSchool - x2) + (ySchool - y2) * (ySchool - y2));
    dist_3 = Math.sqrt((xSchool - x3) * (xSchool - x3) + (ySchool - y3) * (ySchool - y3));

    if ((dist_1 > dist_2) && (dist_1 > dist_3)) {
        result = " Nhà bạn " + name_1 + " xa trường " + nameSchool + " nhất";

    } else if ((dist_2 > dist_1) && (dist_2 > dist_3)) {
        result = " Nhà bạn " + name_2 + " xa trường " + nameSchool + " nhất";
    } else if ((dist_3 > dist_2) && (dist_3 > dist_1)) {
        result = " Nhà bạn " + name_3 + " xa trường " + nameSchool + " nhất";
    }

    document.getElementById("thongBao4").classList.add("thong-bao");
    document.getElementById("thongBao4").innerHTML = result;


}

