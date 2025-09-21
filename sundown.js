
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// let a= document.querySelector("#elem1")
// console.log(a)

// let image=a.getAttribute("data-image")
// console.log(image)


function page4Animation(){
  let elemC=document.querySelector("#elem-container")
let fixed=document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})


elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

// let elem1=document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//    let image=elem1.getAttribute("data-image")
//    fixed.style.backgroundImage=`url(${image})`
// })

let elems=document.querySelectorAll(".elem")
// console.log(elems)
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image=e.getAttribute("data-image")
   fixed.style.backgroundImage=`url(${image})`

        
    })
    e.addEventListener("click", function(){
        let image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})

}
page4Animation()

function swiperAnimation(){
  
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
swiperAnimation()


 

document.addEventListener("DOMContentLoaded", () => {
  const dropBtn = document.getElementById("dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropBtn.addEventListener("click", () => {
    console.log("Button clicked ✅"); // debug ke liye
    dropdownContent.classList.toggle("show");
    console.log("Classes:", dropdownContent.className); // dekho toggle ho raha ya nahi
  });
});









