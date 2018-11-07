
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


full__list.children[which__picture].classList = "visible";

next__button.addEventListener("click", function (e) {
    e.preventDefault();
    full__list.children[which__picture].classList.remove("visible");
    which__picture++;
    if (which__picture > full__list.children.length-1){
        which__picture = 0;
    }
    full__list.children[which__picture].classList = "visible";


});

prev__button.addEventListener("click", function (e) {
    e.preventDefault();
    full__list.children[which__picture].classList.remove("visible");
    which__picture--;
    if (which__picture < 0){
        which__picture = full__list.children.length-1;
    }
    full__list.children[which__picture].classList = "visible"
});

// Sekcja z kalkulatorem

var cena__krzesla = {
    "":"",
    Clair:80,
    Margarita:100,
    Selena:120,
};

var cena__materialu = {
    "":"",
    Tkanina:0,
    Skóra:50,
};
var cena__koloru = {
    "":"",
    Czerwony:0,
    Czarny:0,
    Pomarańczowy:20,
};
var all_dropdown__list = document.querySelectorAll(".drop_down_list");
var list__arrow__dropdown__button = document.querySelectorAll(".list_arrow");

all_dropdown__list.forEach(function (element) {
   element.addEventListener("click",function (e) {
       e.preventDefault();
       element.childNodes[3].classList.toggle("display__on")
   })
});

/* Wybór rodzaju krzesła*/
var chair__type = document.querySelector("#chair__type");


var span__title__summary = document.querySelector("h4.title");
var span__title__summary__value = document.querySelector("h4.title.value");
span__title__summary__value.innerHTML = "";
chair__type.addEventListener("change", function () {
    span__title__summary.innerHTML ="Twój fotel " + chair__type.value;
    span__title__summary__value.innerHTML =cena__krzesla[chair__type.value];
    sum__it__all()
});


/* Wybór materiału krzesła*/
var chair__material = document.querySelector("#chair__material");

var span__material__summary = document.querySelector("span.pattern");
var span__material__summary__value = document.querySelector("span.pattern.value");
span__material__summary__value.innerHTML = "" ;

chair__material.addEventListener("change", function () {
    span__material__summary.innerHTML ="Materiał  " + chair__material.value;
    span__material__summary__value.innerHTML =cena__materialu[chair__material.value];
    sum__it__all()
});

/* Wybór kololru krzesła*/
var chair__color = document.querySelector("#chair__color");


var span__color__summary = document.querySelector("span.color");
var span__color__summary__value = document.querySelector("span.color.value");


chair__color.addEventListener("change", function () {
    span__color__summary.innerHTML ="Kolor  " + chair__color.value;
    span__color__summary__value.innerHTML =cena__koloru[chair__color.value];
    sum__it__all()
});
/* Transport*/
transport__checkbox = document.querySelector("#transport");

var span__transport__summary = document.querySelector("span.transport");
var span__transport__summary__value = document.querySelector("span.transport.value");

transport__checkbox.addEventListener("change", function () {


    if (transport__checkbox.checked === true){
    span__transport__summary.innerHTML ="Transport";
    span__transport__summary__value.innerHTML = transport__checkbox.getAttribute("data-transport-price");
    }else {
        span__transport__summary.innerHTML ="";
        span__transport__summary__value.innerHTML = "";

    }
    sum__it__all()

});
/* suma zamówienia*/
// wszystkie inputy
var all__inputs = document.querySelectorAll("select");
var sum_total__price = document.querySelector(".sum");

/*
all__inputs.forEach(function (element) {
    element.addEventListener("change", function () {
        sum_total__price.innerText = parseFloat(span__title__summary__value.innerHTML) + parseFloat(span__color__summary__value.innerHTML)+
            parseFloat(span__material__summary__value.innerHTML) + parseFloat(span__transport__summary__value.innerHTML)
    })

});
*/

function sum__it__all (){
    var suma = 0;
    var all__values = document.querySelectorAll(".panel_right .value" );
    all__values.forEach( function (element) {
        if (!isNaN(parseFloat(element.innerHTML))) {
            suma += parseFloat(element.innerHTML)
        }
        sum_total__price.innerText = suma
    });

}
// Chowanie po nacisnieciu w option

var all_options = document.querySelectorAll("option");

all_options.forEach(function (element){
    element.addEventListener("click", function (e) {
        e.stopPropagation();
        this.parentElement.classList.toggle("display__on")
    })
});