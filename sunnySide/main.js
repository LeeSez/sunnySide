let menu;

function init(){
  menu = document.querySelector(".menu");
}

function openMenu(){
  if(menu.style.visibility == "hidden"){
    menu.style.visibility = "visible";
  }
  else{
    menu.style.visibility = "hidden";
  }
}