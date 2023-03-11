
const hamburger = document.querySelector('.hamburger');
// // const hero = document.querySelector('.hero');
const navbar = document.querySelector('.menu2');
const close = document.querySelector('.close');
// const menuLink = document.querySelectorAll(".menu a");
// const video = document.querySelector(".background-video");

hamburger.addEventListener('click', ()=>{
    console.log("working");
    navbar.classList.toggle('active');
});

close.addEventListener ('click', ()=>{
    navbar.classList.remove('active');
    
})
// hamburger.addEventListener('click', ()=>{
//   menu.classList.toggle('active');
//   console.log("Clicked on Menu Button!")
// });

// //MAKING THE NAVBAR DISSAPEAR WHEN I CLICK ON IT
disactivateNav = ()=> {

  if (navbar.classList.contains('active')){
    document.addEventListener('click', ()=>{
      navbar.classList.remove('active');
    })
  }
    navbar.addEventListener('click', ()=>{ 
    navbar.classList.remove('active');
})
};
setTimeout(disactivateNav,2000);

// //changing the nav background color on scroll 
// const mobilenavbar = document.querySelector(".mobile-navbar");

// // document.addEventListener('scroll', ()=>{
// //     var scrollPosition = window.scrollY;
// //     if (scrollPosition > 50){
// //         mobilenavbar.style.backgroundColor="black";
// //     }
// //     else if (scrollPosition <50){
// //         mobilenavbar.style.backgroundColor="transparent";
// //     }
// // });

//Makin service text appear after clicking on service 


var desc = document.querySelectorAll('.desc');
var titles = document.querySelectorAll('#serviceName');


desc.forEach((desc) => {
  desc.style.display = "none";
});

titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    const desc = e.target.nextElementSibling;
    desc.style.display = desc.style.display === "block" ? "none" : "block";
  });
});

// titles[0].addEventListener('click', function(){
//   desc[0].style.display = "block";
//   desc[0].toggle();
// })
// titles[1].addEventListener('click', function(){
//   desc[1].style.display = "block";
// })
// titles[2].addEventListener('click', function(){
//   desc[2].style.display = "block";
// })
// titles[3].addEventListener('click', function(){
//   desc[3].style.display = "block";
// })
// titles[4].addEventListener('click', function(){
//   desc[4].style.display = "block";
// })
// titles[5].addEventListener('click', function(){
//   desc[5].style.display = "block";
// })
// titles[6].addEventListener('click', function(){
//   desc[6].style.display = "block";
// })


// service.addEventListener('click', ()=>{
    
// })