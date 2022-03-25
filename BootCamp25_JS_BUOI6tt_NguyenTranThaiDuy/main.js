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
document.getElementById("btnResult").onclick = function () {
    var n = document.getElementById("txtN").value * 1;
    content = "";
    if (n <= 0) {
        content += "Xin mời nhập lại "
        document.getElementById("thongBao5").classList.add("thong--bao");
        document.getElementById("thongBaoSpan").classList.add("thongBaoSpan");

        document.getElementById("thongBaoSpan").innerHTML = content;
    } else {

        if (n >= 2) {
            content += "2"
        }
        for (var i = 3; i < (n + 1); i = i + 2) {
            if (checkPrimeNumber(i)) {
                content += " " + i + " ";
            }
        }
        document.getElementById("thongBao5").classList.add("thong--bao");
        document.getElementById("thongBaoSpan").classList.add("thongBaoSpan");

        document.getElementById("thongBaoSpan").innerHTML = content;
    }
}