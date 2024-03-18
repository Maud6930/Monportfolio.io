// Fonction pour le mode auto-scroll
function autoScrollTo(hash) {
    var target = document.querySelector(hash);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  
  // Auto-scroll quand un lien de navigation est cliqué
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var hash = this.getAttribute('href');
      autoScrollTo(hash);
    });
  });

// Fonction pour vérifier si une section est visible à l'écran
// Fonction pour vérifier si une section est visible à l'écran
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 //&&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Fonction pour animer les éléments en fonction du scroll
  function animateOnScroll() {
    var sections = document.querySelectorAll('.scroll-section');
  
    sections.forEach(function(section) {
      if (isElementInViewport(section)) {
        section.classList.add('active');
      }
    });
  
    // Ajout de la classe active au sous-titre après un délai
    var subtitle = document.querySelector('.subtitle');
    if (document.querySelector('.name.active') && !subtitle.classList.contains('active')) {
      setTimeout(function() {
        subtitle.classList.add('active');
      }, 500); // Délai d'apparition du sous-titre (500ms)
    }
  }
  
  // Écouteur d'événement pour déclencher l'animation lors du scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Déclencher l'animation au chargement de la page
  document.addEventListener('DOMContentLoaded', animateOnScroll);

  document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".custom-cursor");
    const links = document.querySelectorAll("a"); // Sélectionnez tous les liens
  
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHoveringLink = false;
    const speed = 0.15; // Ajustez la vitesse du lerp (0.1 - 1)
    const defaultSize = 50; // Taille initiale du cercle
  
    function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    }
  
    function animateCursor() {
      cursorX = lerp(cursorX, mouseX, speed);
      cursorY = lerp(cursorY, mouseY, speed);
  
      cursor.style.display = "block"; // Affiche le curseur personnalisé
  
      // Réduit la taille du curseur si le curseur est au-dessus d'un lien
      const size = isHoveringLink ? defaultSize / 2 : defaultSize;
      cursor.style.width = size + "px";
      cursor.style.height = size + "px";
  
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
  
      requestAnimationFrame(animateCursor);
    }
  
    animateCursor();
  
    document.addEventListener("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    links.forEach(link => {
      link.addEventListener("mouseover", function() {
        isHoveringLink = true;
      });
  
      link.addEventListener("mouseout", function() {
        isHoveringLink = false;
      });
    });
  
    document.addEventListener("mouseleave", function() {
      cursor.style.display = "none";
    });
  });
  
  