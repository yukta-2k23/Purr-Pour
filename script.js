// Hero-img-container Scroll based animation

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-img-container", {
  borderRadius: "0% 0% 0% 0%", 
  scroller:"body",
  duration: 2,
  scrollTrigger: {
    trigger: ".hero-img-container",
    start: "top 50%",  
    end: "bottom center", 
    scrub: true,
  }
});


// Bell sound on nav items hover
document.querySelectorAll('.bell-sound').forEach(item => {
  item.addEventListener('mouseover', () => {
    const audio = new Audio('assets/sounds/catbellsound.mp3');
    audio.play();
  });
});



// Toggle music
// SOUND ICON TOGGLE
const soundOn = document.getElementById('soundOn');
const soundOff = document.getElementById('soundOff');
const bgMusic = document.getElementById('bg-music');
const toggleContainer = document.getElementById('sound-toggle-container');

let isMuted = true;

toggleContainer.addEventListener('click', () => {
  isMuted = !isMuted;
  
  if (isMuted) {
    bgMusic.pause();
    soundOn.style.display = 'none';
    soundOff.style.display = 'block';
  } else {
    bgMusic.play();
    soundOn.style.display = 'block';
    soundOff.style.display = 'none';
  }
});

// OUR VIBE SECTION
const scrollElements = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-up");

    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight - offset);
    };

    const displayScrollElement = (element) => {
      if (element.classList.contains("scroll-left")) element.classList.add("animate-left");
      if (element.classList.contains("scroll-right")) element.classList.add("animate-right");
      if (element.classList.contains("scroll-up")) element.classList.add("animate-up");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) displayScrollElement(el);
      });
    };

    window.addEventListener("scroll", () => handleScrollAnimation());


// Scroll-based left slide
gsap.utils.toArray('.scroll-left').forEach(elem => {
  gsap.fromTo(elem,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: 5
      }
    }
  );
});

// Scroll-based right slide
gsap.utils.toArray('.scroll-right').forEach(elem => {
  gsap.fromTo(elem,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: 5
      }
    }
  );
});

// Scroll-based up slide
gsap.utils.toArray('.scroll-up').forEach(elem => {
  gsap.fromTo(elem,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: elem,
        start: 'top 100%',
        end: 'bottom 100%',
        scrub: 5
      }
    }
  );
});

// MENU SECTION
$(".flipbook").turn({
  width: 1000,
  height: 600,
  autoCenter: true,
  elevation: 50,
  gradients: true
});

// OUR PET OF THE MONTH SECTION
// Add event listener for heart clicks
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.add('burst'); // Add burst animation on click

    // Remove the burst effect after animation ends
    setTimeout(() => {
      heart.classList.remove('burst');
    }, 1000); // Match the duration of the burst animation
  });
});



//FOOTER
  const footer = document.querySelector(".footer");
  const pawTrack = document.querySelector(".paw-track");
  const circularLogo = document.querySelector(".circular-logo");
  const chatWidget = document.querySelector(".chat-widget"); 

  function toggleElementsOnScroll() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const isFooterVisible = footerTop <= windowHeight;

    // Hide pawTrack except in FAQ
    const isInFAQ = document.querySelector(".faq").getBoundingClientRect().top <= windowHeight &&
                    document.querySelector(".faq").getBoundingClientRect().bottom > 0;
    pawTrack.style.display = isInFAQ && !isFooterVisible ? "block" : "none";

    // Hide circular logo and chat widget in footer
    circularLogo.style.display = isFooterVisible ? "none" : "block";
    if (chatWidget) chatWidget.style.display = isFooterVisible ? "none" : "block";
  }

  window.addEventListener("scroll", toggleElementsOnScroll);
  window.addEventListener("load", toggleElementsOnScroll);

