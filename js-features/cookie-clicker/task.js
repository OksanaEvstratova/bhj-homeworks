clickerCounter = document.getElementById('clicker__counter').textContent;

class CoockieClicker {
    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method]();   
    }

    onMousedown() {
        clickerCounter++;
        document.getElementById('clicker__counter').textContent = clickerCounter;
        cookieClick.width = cookieClick.width + 50;
        cookieClick.height = cookieClick.height + 50;        
      }
  
    onMouseup() {
        cookieClick.width = cookieClick.width - 50;
        cookieClick.height = cookieClick.height - 50;
      }    
}

const cookieClick = document.getElementById('cookie');
let clickEvent = new CoockieClicker();
cookieClick.addEventListener('mousedown', clickEvent);
cookieClick.addEventListener('mouseup', clickEvent);