let read = document.querySelector(".read-more");
let more = document.querySelector(".more-text")
let selectTime = document.querySelector(".select-time")
let dates = document.querySelectorAll(".item");

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

dates.forEach(element => {
    element.addEventListener('click', function() {
        dates.forEach(date => {
            date.style.backgroundColor = "rgb(75, 15, 21)"
        });
        this.style.backgroundColor = 'rgb(150,35,45)';
    });
});