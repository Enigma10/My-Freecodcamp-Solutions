(function () {
    
    var navbar = document.querySelector('nav.top-fixed-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.className += ' scrolling-header';
        } else {
            navbar.className = 'top-fixed-nav';
        }
    })
}());
