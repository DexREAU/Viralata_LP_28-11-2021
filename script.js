
ScrollReveal().reveal('body, .intro_sec img, h1, .underdog_sec article h2, .underdog_sec article h3, .why_sec span, .why_sec p', {
    duration:1600,
    delay:100,
    easing: 'ease',
});
    

const underdogBg = document.querySelector('.underdog_sec article img')
    




    document.body.onscroll = function() {
        let windowPosition = window.pageYOffset;
          underdogBg.style.transform = "translateY(" + windowPosition / 15 + "px)";
      }