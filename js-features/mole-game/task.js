    let deadCount = 0;
    let lostCount = 0;
    const deadElement = document.getElementById('dead');
    const lostElement = document.getElementById('lost');

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }
 
    function finGame(message) {
        deadCount = 0;
        lostCount = 0;
        deadElement.textContent = deadCount;
        lostElement.textContent = lostCount;
        alert(message);
    }

    function clickHole(elemet) {
        if (elemet.target.classList.contains('hole_has-mole')) {
            ++deadCount;
        } else {
            ++lostCount;
        }

        deadElement.textContent = deadCount;
        lostElement.textContent = lostCount;
        
        if (deadCount == 10) {
            finGame('Win');
        } else if (lostCount == 5) {
            finGame('Lost');
        }
    }

    for (let index=1; index<10; index++){
        getHole(index).addEventListener('click', clickHole);
    }
     

  


 
  