document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((q) => {
      q.addEventListener("click", () => {
        q.classList.toggle("active");
        const answer = q.nextElementSibling;
  
        if (q.classList.contains("active")) {
          answer.style.display = "block";
        } else {
          answer.style.display = "none";
        }
      });
    });
  });



  const pageSound = new Audio('assets/sounds/page-flip.mp3'); 

  let canPlay = true;

  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('mouseenter', () => {
      if (canPlay) {
        pageSound.currentTime = 0;
        pageSound.play();
        canPlay = false;

        // Delay before it can play again (e.g., 1.5 seconds)
        setTimeout(() => {
          canPlay = true;
        }, 15);
      }
    });
  });

