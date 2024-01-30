
document.addEventListener("DOMContentLoaded", function() {



  let html = document.getElementsByTagName("html");
  if (window.screen.width >= 320 && window.screen.width <= 1000) {
    html[0].setAttribute("style", `width: ${window.innerWidth-10}px`);
  } else {
    html[0].setAttribute("style", `width: ${document.documentElement.clientWidth-10}px`);
  }
  
  
  // script for "skills" div (.collapsible elements turn down)
  let coll = document.getElementsByClassName("collapsible");
  let i;
  
  for (i = 0; i < coll.length; i++) {    
      coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
          content.setAttribute("style", "padding-bottom: 0px;")
          content.style.maxHeight = null;
          this.setAttribute("style", "border-radius: 10px 10px 10px 10px");
      
      } else {
          this.setAttribute("style", "border-radius: 10px 10px 0px 0px");
          content.setAttribute("style", "border-radius: 0px 0px 25px 25px; padding-bottom: 15px;");
          content.style.maxHeight = content.scrollHeight + "px";
          
      //   сверачивание всех остальных пунктов
          for (j = 0; j < coll.length; j++) {
              if (coll[j].innerHTML != this.innerHTML) {
                  content_for_close = coll[j].nextElementSibling;
                  if (content_for_close.style.maxHeight != null) {
                      content_for_close.setAttribute("style", "padding-bottom: 0px;")
                      content_for_close.style.maxHeight = null;
                      coll[j].classList.remove("active"); 
                      coll[j].setAttribute("style", "border-radius: 10px 10px 10px 10px");
                  };   
              };
          }
          
          setTimeout(function(button) { 
            button.scrollIntoView({ behavior: "smooth", block: "start"})
          }, 300, this);
      }
    });
  }
  
  
  // PROGRESS BAR Script
  // When the user scrolls the page, fill the progress bar. (Depends from device)
  let nav = navigator.userAgent
  let progressBarHeight = document.getElementById("myBar").style.width
  
  
  let deviceHeight = nav.includes("Android") ? window.innerHeight + progressBarHeight : document.documentElement.clientHeight;
    
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - deviceHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
  }


  // refresh page for correct working of JS


}, false);

window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      setTimeout(() => {
        window.location.reload();
      }, 3000)  
      
  }
}
