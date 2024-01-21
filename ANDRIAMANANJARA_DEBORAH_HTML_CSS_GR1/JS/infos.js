// LIGHT MODE, ne marche pas comme convenu

document.addEventListener('DOMContentLoaded', function() {
    var icon = document.getElementById("icon");
    var header = document.querySelector(".header")
    var tabHeader = document.querySelectorAll('.headNav')

    const body = document.body;
    const titre = document.querySelector('.titre')
    const paraf = document.querySelectorAll('.p-infos')
    
  

    icon.addEventListener('click', function(){
      body.classList.toggle('light-mode');
      header.classList.toggle('light-header');
      titre.classList.toggle('titre-light');
      tabHeader.forEach(onglet =>{ // Ne marche Pas
        onglet.classList.toggle('.headNavLight')
      })
      paraf.forEach(p =>{
        p.classList.toggle('.intel-descriptionP-light');
      })
      
      

      if(document.body.classList.contains("light-mode")){
        icon.src = "images/moon.png";
      } else {
        icon.src = "images/sun.png";
      }
    })
});