// ========search form========= 
let searchFrom=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
    {
        searchFrom.classList.toggle('active');
        // shoppingCart.classList.remove('active');
        userLogin.classList.remove('active');
        menuBar.classList.remove('active');
    }

// =========shopping cart==========
// let shoppingCart=document.querySelector('.shopping_cart');
// document.querySelector('#cart_btn').onclick=()=>
//     {
//        shoppingCart.classList.toggle('active');
//        searchFrom.classList.remove('active');
//         userLogin.classList.remove('active');
//         menuBar.classList.remove('active');
//     }

// ==============user login======
let userLogin=document.querySelector('.login-form');
document.querySelector('#Login_btn').onclick=()=>
    {
        userLogin.classList.toggle('active');
        searchFrom.classList.remove('active');
        // shoppingCart.classList.remove('active');
        menuBar.classList.remove('active');
    }

    // =========menu bar=======
let menuBar=document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=()=>
        {
            menuBar.classList.toggle('active');
            searchFrom.classList.remove('active');
            // shoppingCart.classList.remove('active');
            userLogin.classList.remove('active');
        }
window.onscroll =()=>{

    searchFrom.classList.remove('active');
    // shoppingCart.classList.remove('active');
    userLogin.classList.remove('active');
    menuBar.classList.remove('active');
    popularBtn.classList.remove('active');
}
// home slider
var swiper = new Swiper(".content-slider" , {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
        
      },
      991: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  // popular btn
//   let popularBtn=document.querySelector('.p-btn');
// document.querySelector('#p_btn').onclick=()=>{

//   popularBtn.classList.toggle('active');

// }

var swiper = new Swiper(".img-slider" ,{
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:2500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      
    },
    991: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
