// Animasi untuk section elegan
document.addEventListener('DOMContentLoaded', function() {
    // Animasi saat scroll untuk section about
    const elegantAbout = document.querySelector('.elegant-about');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        const elementTop = elegantAbout.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            elegantAbout.classList.add('active');
        }
    }
    
    // Panggil fungsi saat scroll dan saat load
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    
    // Animasi untuk detail items
    const detailItems = document.querySelectorAll('.detail-item');
    detailItems.forEach((item, index) => {
        item.style.transition = 'transform 0.5s ease ' + (index * 0.1) + 's, opacity 0.5s ease ' + (index * 0.1) + 's';
    });
});