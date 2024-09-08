function changePage(){

    var linkMassive = Array.from(document.querySelectorAll('.tab'));
    var linkContentMassive = Array.from(document.querySelectorAll('.tab__content'));
    let targetIndex = linkMassive.indexOf(event.target);

    linkMassive.forEach((item, index) => {
        if (index === targetIndex) {
            item.classList.add('tab_active');
            linkContentMassive[index].classList.add('tab__content_active');
        }   else {
            item.classList.remove('tab_active');
            linkContentMassive[index].classList.remove('tab__content_active');
        }
    })
}


var tabNavigation = document.querySelector('.tab__navigation');
tabNavigation.addEventListener('click', changePage);