const linksArray = Array.from(document.querySelectorAll('.has-tooltip'));


let tooltip = document.createElement("div");
tooltip.className = "tooltip";  
tooltip.hidden = true;  
document.body.append(tooltip);



linksArray.forEach((el)=> {
    el.onclick = () =>{
        event.preventDefault();
        tooltip.classList.add('tooltip_active');
        tooltip.innerText = el.getAttribute('title');
        tooltip.hidden = false;  

        console.log(event.target.getBoundingClientRect().left);
        console.log(event.target.getBoundingClientRect().bottom);
        tooltip.style.left = event.target.getBoundingClientRect().left + "px";
        tooltip.style.top = event.target.getBoundingClientRect().bottom + "px";


        
    }
}) 
