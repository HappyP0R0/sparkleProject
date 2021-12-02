const burger = document.getElementById("burger");
const close_burger = document.getElementById("close_burger");
const menu = document.getElementById("menu");

var container_top = document.getElementById("container_top");

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

  if((container_top.offsetHeight - 57) <= (window.pageYOffset + btnToTop.getBoundingClientRect().top)){
    btnToTop.classList.remove("fixed");
    btnToTop.classList.add("absolute");
    btnToTop.style.top = container_top.offsetHeight;
  }
  else if ((window.scrollY + window.innerHeight) < (window.pageYOffset + btnToTop.getBoundingClientRect().top)){
    console.log("NOOOOOOOOOOOOOOOOWWWWWWWWWWWWWWWWWWWW");
    btnToTop.classList.add("fixed");
    btnToTop.classList.remove("absolute");
    btnToTop.style.top = null;
  }
}


btnToTop.addEventListener("click", function(){
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});


