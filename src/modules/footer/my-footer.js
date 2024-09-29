import './my-footer.scss';
import footerHTML from './index.html';

function create() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.innerHTML = footerHTML;

  document.addEventListener('DOMContentLoaded', () => {
    if (footer) {
      const svgPath = footer.querySelector('svg path');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            svgPath.style.fill = 'transparent';
          } else {
            svgPath.style.fill = 'white';
          }
        });
      }, {
        threshold: 0.7
      });
  
      observer.observe(footer);
    } 
  });
  return footer;
}

export default {
  create,
};
