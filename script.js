
ScrollReveal().reveal('body, .intro_sec img, h1, .underdog_sec article h2, .underdog_sec article h3, .why_sec span, .why_sec p, .web3_sec p, .how_sec p', {
    duration:1600,
    delay:100,
    easing: 'ease',
});
    

const underdogBg = document.querySelector('.underdog_sec article img')
    

let windowPosition;


    document.body.onscroll = function() {
        windowPosition = Math.round(window.pageYOffset);
          underdogBg.style.transform = "translateY(" + windowPosition / 8 + "px)";
      }