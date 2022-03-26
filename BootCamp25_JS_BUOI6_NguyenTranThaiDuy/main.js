// BAI 1 
// Tìm số nguyên dương nhỏ nhất sao cho:
//             1 + 2 + … + n > 10000

function findN(n = 10000) {
    var sum = 0;
    var i = 1;

    do {
        sum += i;
        if (sum > n) {
            break;
        }
        i++;
    } while (true);
    return i;
}

document.getElementById("btnResult1").onclick = function () {
    result = "Số nguyên dương nhỏ nhất: " + findN();
    document.getElementById("thongBao1").classList.add("thongBao--1")
    document.getElementById("thongBao1span").innerHTML = result;
}
// Bai 2:Viết chương trình nhập vào 2 số x, n tính tổng:
//  S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm)


function sumPow(x, n) {
    var sum = 0;

    for (var i = 1; i <= n; ++i) {
        sum += x ** i;
    }
    return sum;
}
document.getElementById("btnResult2").onclick = function () {
    var x = document.getElementById("txtX").value * 1;
    var n = document.getElementById("txtN").value * 1;

    var result = sumPow(x, n);
    document.getElementById("thongBao2span").innerHTML = result;
}
// Bai 3 Nhập vào n.Tính giai thừa 1 * 2 *...n

function getFactorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
document.getElementById("btnResult3").onclick = function () {
    var x = document.getElementById("txtGiaiThua").value * 1;
    var kq = getFactorial(x);

    document.getElementById("thongBao3span").innerHTML = kq;
}
// Bai 4 Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
// background màu xanh
const parrentDiv = document.getElementById("thongBao")

function addElement(text, type) {
    // create a new div element
    const newDiv = document.createElement("div");
    // and give it some content
    const newContent = document.createTextNode(text);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    if (type % 2 === 0) { newDiv.classList.add("thong__bao--blue") } else { newDiv.classList.add("thong__bao--red") }

    return newDiv
}


document.getElementById("btnResult4").onclick = function () {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {

            parrentDiv.parentNode.insertBefore(addElement(`Div chẵn  ${i}`, i), parrentDiv);
        } else if (i % 2 != 0) {

            parrentDiv.parentNode.insertBefore(addElement(`Div lẻ  ${i}`, i), parrentDiv);
        }
    }
} 