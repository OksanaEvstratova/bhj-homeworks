/*     intervalId = setInterval(function(){
        var timerValue = document.getElementById('timer');
        --timerValue.textContent;
        if (timerValue.textContent == 0){
            alert('Вы победили в конкурсе!');
            clearInterval(intervalId);
        }
    }, 1000); */



 
var countStart = new Date;
docVal = document.getElementById('timer').textContent;
countStart.setHours(0, 0, docVal);
document.getElementById('timer').textContent = countStart.toLocaleTimeString();


intervalId = setInterval(function () {
    --docVal;
    countStart.setHours(0, 0, docVal);
    document.getElementById('timer').textContent = countStart.toLocaleTimeString();
    if (docVal == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
     }
}, 1000); 