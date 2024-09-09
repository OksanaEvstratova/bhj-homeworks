const ButtonsArray = Array.from(document.querySelectorAll('.font-size'));

ButtonsArray.forEach(item => {
    item.addEventListener('click', selectFontSize)
})

function selectFontSize(event) {
    ButtonsArray.forEach(item => {
        item.classList.remove('font-size_active')
    })

    this.classList.add('font-size_active');
    dataFontSize = this.getAttribute('data-size');  

  
    book = document.getElementById('book');   
    book.classList.remove('font-size_big');
    book.classList.remove('font-size_small');  
    if (dataFontSize !== null) {
        book.classList.add('font-size_'+dataFontSize);
    }
    
    event.preventDefault()
}