let read = document.querySelector(".read-more");
let more = document.querySelector(".more-text")
let selectTime = document.querySelector(".select-time")

let toggle = false

read.addEventListener('click', function () {
    if (window.getComputedStyle(more).display === "none") {
        more.style.display = "block"
        selectTime.style.marginTop = "48px"
    } else {
        more.style.display = "none";
        selectTime.style.marginTop = "18px"
    }
});
