// SLIDER

document.addEventListener('DOMContentLoaded', function(){

    const swiper = new Swiper(".mySwiper", {
        navigation:{
            nextEl: ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        pagination : {
            el: ".swiper-pagination",
        },
        autoplay : {
            delay : 3000
        }
    })
})



// LIGHT MODE

document.addEventListener('DOMContentLoaded', function() {
    var icon = document.getElementById("icon");
    var header = document.querySelector(".header")
    var tabHeader = document.querySelectorAll('.headNav')
    const body = document.body;
  

    icon.addEventListener('click', function(){
      body.classList.toggle('light-mode');
      header.classList.toggle('light-header');
      tabHeader.forEach(onglet =>{ // Ne marche Pas
        onglet.classList.toggle('.headNavLight')
      })
      

      if(document.body.classList.contains("light-mode")){
        icon.src = "images/moon.png";
      } else {
        icon.src = "images/sun.png";
      }
    })
});