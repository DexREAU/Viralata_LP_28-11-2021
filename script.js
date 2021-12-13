
ScrollReveal().reveal('body, h1, .underdog_sec article h2, .underdog_sec article h3, .why_sec span, .why_sec p, .web3_sec p, .how_sec p, .products_sec h6, .products_sec p, .products_list li, .products_list img, .blog_section article', {
    duration:1200,
    easing: 'ease',
});

const timelineSec = document.querySelector('.timeline_sec')


ScrollReveal().reveal(timelineSec, {
    duration:1200,
    easing: 'ease',
    afterReveal: function (el) {
        
    }
});