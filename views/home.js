document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
    
    // Clone slides to create an infinite loop effect
    slideElements.forEach(slide => {
        const clone = slide.cloneNode(true);
        slides.appendChild(clone);
    });

    let index = 0;
    function nextSlide() {
        index++;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${index * 100}%)`;
        togglePause() 
        
        // Reset when reaching cloned slides
        setTimeout(() => {
            if (index >= slideElements.length) {
                index = 0;
                slides.style.transition = "none";
                slides.style.transform = `translateX(0)`;
            }
        }, 500);
    }

    function prevSlide() {
        if (index === 0) {
            index = slideElements.length;
            slides.style.transition = "none";
            slides.style.transform = `translateX(-${index * 100}%)`;
            togglePause() 
        }
        setTimeout(() => {
            index--;
            slides.style.transition = "transform 0.5s ease-in-out";
            slides.style.transform = `translateX(-${index * 100}%)`;
        }, 10);
    }

    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
});

function togglePause() {
    let element = document.querySelector(".sliding-text");
    element.classList.toggle("paused");
    console.log("Hello world")
}

// Optional: Add interactivity or additional animations using JavaScript
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
      const speed = particle.getAttribute('data-speed') || 1;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      particle.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
  
