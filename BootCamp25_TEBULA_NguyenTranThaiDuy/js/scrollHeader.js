// lấy element #page-header ra
const header = document.querySelector("#page-header");

function scrollHandler(event) {
    if (window.scrollY > 0) {
        header.classList.add("header-onscroll");
        header.classList.remove("header-default");
    } else {
        header.classList.add("header-default");
        header.classList.remove("header-onscroll");
    }
}

// add scrolling event vào window
window.addEventListener("scroll", scrollHandler);