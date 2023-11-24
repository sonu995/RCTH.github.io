
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
               
            },
            1000:{
                items:3
            }
        }
    })

  });;

  

  let nav = document.querySelector(".navigation-wrap");
  window.onscroll = function(){
      if(document.documentElement.scrollTop > 20){
          nav.classList.add("scroll-on")
      }
      else{
          nav.classList.remove("scroll-on")
  
      }
  }



  const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});