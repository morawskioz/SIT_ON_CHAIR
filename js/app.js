
// skrypt do chowania i pokazywania submenu
var sub__menu = document.querySelector(".submenu");

var o__firmie = document.querySelector(".navigation__item:first-child");

o__firmie.addEventListener("mouseover",function () {
    sub__menu.classList.toggle("opacity__hidden")
});
o__firmie.addEventListener("mouseout",function () {
    sub__menu.classList.toggle("opacity__hidden")
});

//skrypt do chowania blokow


var opacity__parts = document.querySelectorAll(".opacity__parts");


opacity__parts.forEach(function (zakladka){
    zakladka.addEventListener("mouseover", function () {
        this.firstElementChild.classList.toggle("opacity_shown")
    })
});
opacity__parts.forEach(function (zakladka){
    zakladka.addEventListener("mouseout", function () {
        this.firstElementChild.classList.toggle("opacity_shown")
    })
});

// skrypt do slajdera

var next__button = document.querySelector("#right");
var prev__button = document.querySelector("#left");

var which__picture = 0;

var full__list = document.querySelector("ul.slider");

console.log(full__list.firstElementChild);
console.log(full__list.children.length);
full__list.children[which__picture].classList = "visible";

next__button.addEventListener("click", function () {
    full__list.children[which__picture].classList.remove("visible");
    which__picture++;
    if (which__picture > full__list.children.length-1){
        which__picture = 0;
    }
    full__list.children[which__picture].classList = "visible";


});

prev__button.addEventListener("click", function () {
    console.log("jestem klikniety");
    full__list.children[which__picture].classList.remove("visible");
    which__picture--;
    if (which__picture < 0){
        which__picture = full__list.children.length-1;
    }
    full__list.children[which__picture].classList = "visible"
});