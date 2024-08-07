let read = document.querySelector(".read-more");
let more = document.querySelector(".more-text");
let selectTime = document.querySelector(".select-time");
let dates = document.querySelectorAll(".item");
let seats = document.querySelectorAll('.fa-couch');
let menu = document.querySelector(".menu-shrink");
let menuDrop = document.querySelector(".menu-drop");
let reserveBtn = document.querySelector(".reserve-btn");
let modale = document.querySelector("modal");
let modale1 = document.querySelector("modal1")
let purchaseBtn = document.querySelector('.purchase--btn');
let number = 0;
let price = document.querySelector('.price');
let cost = 0;
let toggle = false;

let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let row3 = document.querySelector('.row3');
let row4 = document.querySelector('.row4');
let row5 = document.querySelector('.row5');
let row6 = document.querySelector('.row6');


menu.addEventListener('click', function () {
    if (menuDrop.style.display === "none" || menuDrop.style.display === "") {
        menuDrop.style.display = "block";
    } else {
        menuDrop.style.display = "none";
    }
});

read.addEventListener('click', function () {
    if (window.getComputedStyle(more).display === "none") {
        more.style.display = "block"
        read.innerHTML = "Less"
        // selectTime.style.marginTop = "48px"
    } else {
        more.style.display = "none";
        read.innerHTML = "More"
        // selectTime.style.marginTop = "18px"
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
    element.addEventListener('click', function () {
        seats.forEach(element => {
            element.style.color = 'white';
        });

        let arr = randomNumber();
        seats[arr[0]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[1]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[2]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[3]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[4]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[5]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[6]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[7]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[8]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[9]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[10]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[11]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[12]].style.color = 'rgba(180, 10, 50, 1)';
        seats[arr[13]].style.color = 'rgba(180, 10, 50, 1)';
    })
});

seats.forEach(element => {
    element.addEventListener('click', function () {
        let isDateSelected = Array.from(dates).some(date => date.style.backgroundColor === 'rgb(150, 35, 45)');
        if (isDateSelected && element.style.color === 'white') {
            element.style.color = 'rgb(47, 156, 207)';
            switch (element.parentElement) {
                case row1:
                    cost = cost + 100;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row2:
                    cost = cost + 90;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row3:
                    cost = cost + 80;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row4:
                    cost = cost + 70;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row5:
                    cost = cost + 60;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row6:
                    cost = cost + 50;
                    price.innerText = "Total " + "$" + cost;
                    break;
                default:
                    break;
            }
        } else if (element.style.color === 'rgb(47, 156, 207)') {
            element.style.color = 'white';
            switch (element.parentElement) {
                case row1:
                    cost = cost - 100;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row2:
                    cost = cost - 90;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row3:
                    cost = cost - 80;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row4:
                    cost = cost - 70;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row5:
                    cost = cost - 60;
                    price.innerText = "Total " + "$" + cost;
                    break;
                case row6:
                    cost = cost - 50;
                    price.innerText = "Total " + "$" + cost;
                    break;
                default:
                    break;
            }
        };
    })
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
window.onload = function () {
    let purchaseBtn = document.querySelector('.purchase--btn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', function () {
            window.location.href = 'index2.html';
        });
    } else {
        console.error('Element with class "purchase--btn" not found.');
    }
};
