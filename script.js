
ScrollReveal().reveal('body, h1, .underdog_sec article h2, .underdog_sec article h3, .why_sec span, .why_sec p, .web3_sec p, .how_sec p, .products_sec h6, .products_sec p, .products_list li, .products_list img, .blog_section article', {
    duration:1200,
    easing: 'ease',
});

const timelineCtnr = document.querySelector('.timeline_ctnr')

let startWindowsPosition;
let windowPosition;

ScrollReveal().reveal(timelineCtnr, {
    duration:600,
    easing: 'ease',
    afterReveal: function (el) {
        startWindowsPosition = window.pageYOffset;
        
        document.body.onscroll = function() {
            windowPosition = window.pageYOffset;
        
            timelineCtnr.scrollLeft = (timelineCtnr.scrollLeft) + (windowPosition - startWindowsPosition) /10;
        }
    }
});
