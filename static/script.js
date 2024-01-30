  // refresh page for correct working of JS
  window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        setTimeout(() => {
          window.location.reload();
        }, 2000)  
        
    }
  }
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
  let nameHeaderHeight = document.getElementsByClassName("full-name-header")[0].clientHeight
  
  
  let deviceHeight = nav.includes("Android") ? window.innerHeight + nameHeaderHeight : document.documentElement.clientHeight;
    
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - deviceHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
  }



  console.log(`Page width: ${document.documentElement.clientWidth}`)
  console.log(`window width: ${window.innerWidth}`)
  console.log(`window screen width: ${window.screen.width}`)

  let p = document.getElementById("check");
  p.innerHTML = `Page width: ${document.documentElement.clientWidth}<br><br>window width: ${window.innerWidth},<br><br>window screen width: ${window.screen.width}`
  // document.body.style.zoom=1.5;
  // $(document).ready(function(){
  //   $('body').css('zoom','180%'); /* Webkit browsers */
  //   $('body').css('zoom','1.8'); /* Other non-webkit browsers */
  //   $('body').css('-moz-transform',scale(1.8, 1.8)); /* Moz-browsers */
  // });
}, false);
