/* function expandMenu(element){
    element.nextElementSibling.classList.add('dropdown__list_active'); 
}

function collapseMenu(element){  
    element.classList.remove('dropdown__list_active');  
}

const button = document.querySelector('.dropdown__value');
button.onclick = () => {
    expandMenu (button);
    return false;
}

var buttonList = Array.from(document.querySelectorAll('.dropdown__item'));
buttonList.forEach((item, index) =>{
    item.onclick = () => {
        button.textContent = buttonList[index].textContent;
        collapseMenu(buttonList[index].parentElement);
        return false
    }
})
 */
/////////////////////////////////////////////////////////////////////////////////////////////


function expandMenu(){
    event.target.nextElementSibling.classList.add('dropdown__list_active'); 
    return false
}

function collapseMenu(){  
    event.currentTarget.classList.remove('dropdown__list_active');  
    return false

}

var buttons = Array.from(document.querySelectorAll('.dropdown__value'));
buttons.forEach((item, index) =>{
    item.addEventListener('click', expandMenu);
})

var buttonList = Array.from(document.querySelectorAll('.dropdown__list'));
buttonList.forEach((item, index) =>{
   item.addEventListener('click', collapseMenu);
})

var linksList = Array.from(document.querySelectorAll('.dropdown__link'));
linksList.forEach((item, index) =>{
    item.onclick = () => {
        let parent = item.closest('.dropdown');
        let child  = parent.querySelector('.dropdown__value'); 
        child.textContent = linksList[index].textContent
        return false
    }
})
