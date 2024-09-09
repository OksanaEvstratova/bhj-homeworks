function scrollPage() {
    
    revealsArray = Array.from(document.querySelectorAll('.reveal'));
    revealsArray.forEach((el) =>{
        revealTop = el.getBoundingClientRect().top;
        revealBottom = el.getBoundingClientRect().bottom;
         if ((revealTop > 0 ) && (revealBottom < window.innerHeight)) {
            el.classList.add('reveal_active');
            }   
        }    
    )
  }

document.addEventListener('scroll', scrollPage);