// let body = document.getElementsByTagName("body");
// let bodywidth = body[0].offsetWidth
// console.log(`Body width== ${bodywidth}`);

let html = document.getElementsByTagName("html");
// let htmlwidth = html[0].offsetWidth
// console.log(`HTML width== ${htmlwidth}`);
if (window.screen.width >= 320 && window.screen.width <= 1000) {
  html[0].setAttribute("style", `width: ${window.innerWidth-5}px`);
}


let newhtmlwidth = html[0].offsetWidth
console.log(`HTML width== ${newhtmlwidth}`);

// Our diapasones 320-1000 and 1000+



console.log(`Размер окна браузера без полосы прокрутки, document.documentElement.clientWidth  === ${document.documentElement.clientWidth }`)
console.log(`Размер окна браузера с полосой прокрутки, window.innerWidth === ${window.innerWidth }`)
console.log('------------')
console.log(`Размер экрана девайса, window.screen.width=== ${window.screen.width}`)


let ddEc = document.documentElement.clientWidth;
let wiW = window.innerWidth;
let wsw = window.screen.width;


let check = document.getElementsByClassName("check");
console.log(check)
check[0].innerHTML = `Размер окна браузера без полосы прокрутки, document.documentElement.clientHeight  === ${document.documentElement.clientHeight}<br><br>`;
check[0].innerHTML += `Размер окна браузера с полосой прокрутки, window.innerHeight === ${window.innerHeight}<br><br>`;
check[0].innerHTML += "-----------<br>";
check[0].innerHTML += `Размер экрана девайса, window.screen.height=== ${window.screen.height}`;







// script for "skills" div (.collapsible elements turn down)
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.setAttribute("style", "padding-bottom: 0px; width: 95%")
        content.style.maxHeight = null;
        this.setAttribute("style", "border-radius: 10px 10px 10px 10px");
    
    } else {
        this.setAttribute("style", "border-radius: 10px 10px 0px 0px");
        content.setAttribute("style", "border-radius: 0px 0px 25px 25px; padding-bottom: 15px");
        content.style.maxHeight = content.scrollHeight + "px";
        
    //   сверачивание всех остальных пунктов
        for (j = 0; j < coll.length; j++) {
            if (coll[j].innerHTML != this.innerHTML) {
                content_for_close = coll[j].nextElementSibling;
                if (content_for_close.style.maxHeight != null) {
                    content_for_close.setAttribute("style", "padding-bottom: 0px; width: 95%")
                    content_for_close.style.maxHeight = null;
                    coll[j].classList.remove("active"); 
                    coll[j].setAttribute("style", "border-radius: 10px 10px 10px 10px");
                };   
            };
        }

    }
  });
}


// When the user scrolls the page, execute myFunction

let nav = navigator.userAgent;
check[0].innerHTML += `<br><br>Устройство: ${nav}`;
console.log(`type of device info: ${typeof(nav)}`);

if ("Android" in nav) {
  window.onscroll = function() {myFunction()};
  function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - window.screen.height;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

} else {

  window.onscroll = function() {myFunction()};
  function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

}


// 

