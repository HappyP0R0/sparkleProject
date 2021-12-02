var burger = document.getElementById("burger");
const close_burger = document.getElementById("close_burger");
const menu = document.getElementById("menu");

const btnToTop = document.getElementById("btnToTop");

burger.addEventListener("click", function(){
  burger.classList.toggle("hidden");
  close_burger.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

close_burger.addEventListener("click", function(){
  burger.classList.toggle("hidden");
  close_burger.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

window.onscroll = function(e){
  if(window.scrollY == 0 && !btnToTop.classList.contains("hidden")){
    btnToTop.classList.add("hidden");
  }
  else if( window.scrollY != 0 && btnToTop.classList.contains("hidden")){
    btnToTop.classList.remove("hidden");
  }
}


btnToTop.addEventListener("click", function(){
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});


