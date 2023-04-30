const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const menu = document.querySelector(".menu");

ham.addEventListener("click", function(){

  ham.classList.add("hidden");

  close.classList.remove("hidden");

  menu.classList.add("menu-scale");

});

close.addEventListener("click", function(){

  ham.classList.remove("hidden");

  close.classList.add("hidden");

  menu.classList.remove("menu-scale");

});