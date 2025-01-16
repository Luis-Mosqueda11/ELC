// Scroll Text Animation
document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.scroll-text');
    const secondaryText = document.querySelector('.scroll-text-secondary');
  
    if (!textElements.length) {
      console.error("No se encontraron elementos con la clase '.scroll-text'.");
      return;
    }
  
    textElements.forEach((textElement, index) => {
      const text = textElement.dataset.text;
      const textArray = text.split('');
  
      textElement.innerHTML = textArray
        .map(letter => `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`)
        .join('');
  
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log("El elemento es visible, comenzando la animación...");
              const letters = entry.target.querySelectorAll('span');
              letters.forEach((span, letterIndex) => {
                setTimeout(() => {
                  span.classList.add('visible');
                }, letterIndex * 50);
              });
  
              if (index === textElements.length - 1 && secondaryText) {
                setTimeout(() => {
                  secondaryText.classList.add('visible');
                }, letters.length * 50 + 300);
              }
  
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      observer.observe(textElement);
    });
  });

// Footer

const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = link.getAttribute('data-color');
    });

    link.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = ''; // Reset to default
    });
});
