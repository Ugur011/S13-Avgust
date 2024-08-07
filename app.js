let read = document.querySelector(".read-more");
let more = document.querySelector(".more-text");
let selectTime = document.querySelector(".select-time");
let dates = document.querySelectorAll(".item");
let seats = document.querySelectorAll('.fa-couch');
let menu = document.querySelector(".menu-shrink");
let menuDrop = document.querySelector(".menu-drop");
let number = 0;
let price = document.querySelector('.price');
let cost = 0;
let toggle = false


menu.addEventListener('click', function () {
    if (window.getComputedStyle(menu).display === "none") {
        menuDrop.style.display = "block"
    } else {
        menuDrop.style.display = "none";
    }
});

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
    element.addEventListener('click', function () {
        dates.forEach(date => {
            date.style.backgroundColor = "rgb(75, 15, 21)"
        });
        this.style.backgroundColor = 'rgb(150,35,45)';
    });
});

function randomNumber() {
    let set = new Set();
    while (set.size < 14) {
        set.add(Math.floor(Math.random() * 53));
    }
    return Array.from(set);
}

dates.forEach(element => {
    element.addEventListener('click', function() {
        seats.forEach(element => {
            element.style.color = 'white';
        });

        let arr = randomNumber();
        seats[arr[0]].style.color = 'red';
        seats[arr[1]].style.color = 'red';
        seats[arr[2]].style.color = 'red';
        seats[arr[3]].style.color = 'red';
        seats[arr[4]].style.color = 'red';
        seats[arr[5]].style.color = 'red';
        seats[arr[6]].style.color = 'red';
        seats[arr[7]].style.color = 'red';
        seats[arr[8]].style.color = 'red';
        seats[arr[9]].style.color = 'red';
        seats[arr[10]].style.color = 'red';
        seats[arr[11]].style.color = 'red';
        seats[arr[12]].style.color = 'red';
        seats[arr[13]].style.color = 'red';
    })
});

seats.forEach(element => {
    element.addEventListener('click', function() {
        let isDateSelected = Array.from(dates).some(date => date.style.backgroundColor === 'rgb(150, 35, 45)');
        if (isDateSelected && element.style.color === 'white') {
            element.style.color = 'rgb(47, 156, 207)';
            cost = cost+40;
            price.innerText = "Total " + "$" + cost;
        } else if (element.style.color === 'rgb(47, 156, 207)') {
            element.style.color = 'white';
            cost = cost-40;
            price.innerText = "Total " + "$" + cost;
        }
    });
});
