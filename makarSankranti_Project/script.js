// Floating kites with GSAP
document.querySelectorAll(".kite").forEach((kite, index) => {
    gsap.to(kite, {
        y: -200,
        x: index % 2 === 0 ? -100 : 100,
        repeat: -1,
        yoyo: true,
        duration: 5 + Math.random() * 3,
        ease: "power1.inOut"
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const kiteCount = 7; // Number of kites to display
    const body = document.body;

    for (let i = 0; i < kiteCount; i++) {
        const kite = document.createElement('div');
        kite.classList.add('kite');
        
        // Set a random position for each kite
        kite.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        kite.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        
        // Append the kite to the body
        body.appendChild(kite);
    }
});
