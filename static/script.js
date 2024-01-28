// script for "skills" div (.collapsible elements turn down)

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.setAttribute("style", "padding-bottom: 0px")
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
                    content_for_close.setAttribute("style", "padding-bottom: 0px")
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
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// 
