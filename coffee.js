function bar() {
    let show = document.getElementById('home-div')
    show.classList.toggle('show')
}

function drops(event) {
    event.preventDefault(); 
    let display = document.getElementById('second-ul');
    display.classList.toggle('display');
}

$(document).ready(function () {
    $('#owl-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        animateOut: 'fadeOut',  
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})

$(document).ready(function () {
  $('#owl-2').owlCarousel({
      auto:true,
      autoplay:3000,
      loop:true,
      dots:true,
      margin: 50,
      slideBy:1,
      responsive: {
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items :3
          }
      }
  })
})                   



  window.onscroll = function () {
    const scrollBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  document.getElementById("scrollToTop").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

