// BURGER

const tabs = document.querySelectorAll('.tab'); // Pour récupérer les <li>
const tabContents = document.querySelectorAll('.tab-content'); // Pour récupérer les <div> café cake et product

tabs.forEach((li, tabClicked) => { // Grossièrement : "Quand une <li> stockée dans mon <tab ul> est sélectionnée"
  li.addEventListener('click', function() {

    tabs.forEach(tab => tab.classList.remove('tab-active')); // Retire la classe "tab-active" au tab précedamment sélectionné..
    tabContents.forEach(content => content.classList.remove('active')); // ...et retire donc la classe "active" au contenu/texte correspondant au tab d'avant


    this.classList.add('tab-active'); // Ajoute la classe "tab-active" à l'élément cliqué (this)
    tabContents[tabClicked].classList.add('active'); // Affiche le contenu correspondant au tab cliqué
  });
});



// LIGHT MODE, ne marche aps comme convenu

document.addEventListener('DOMContentLoaded', function() {
    var icon = document.getElementById("icon");
    const body = document.body;
    var header = document.querySelector(".header")
    var tabHeader = document.querySelectorAll('.headNav')
    const titre = document.querySelector('.titre')
    const tabs = document.querySelectorAll('.tab');
    var allH3 = document.querySelectorAll('.productName')
  

    icon.addEventListener('click', function(){
      body.classList.toggle('light-mode');
      titre.classList.toggle('titre-light');
      header.classList.toggle('light-header');
      tabHeader.forEach(onglet =>{ // Ne marche Pas
        onglet.classList.toggle('.headNavLight')
      })
      allH3.forEach(h3Element => {
        h3Element.classList.toggle('.productNameLight'); //Ne marche pas
      })
      
      
       tabs.forEach(tab => { // J'ai pas réussi ici
        if (tab.classList.contains('tab-active')) {
          tab.classList.toggle('tab-active-light');
        } else {
          tab.classList.remove('tab-active-light');
        }
      });
      

      if(document.body.classList.contains("light-mode")){
        icon.src = "images/moon.png";
      } else {
        icon.src = "images/sun.png";
      }
    })
});