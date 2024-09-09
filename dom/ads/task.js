
    arrRotator = Array.from(document.querySelectorAll('.rotator__case'));
    arrRotator[0].style.color = arrRotator[0].getAttribute("data-color");
    var ind = 1;
    arrRotatorlength = arrRotator.length 
    setInterval(function(){
        indRem = ind-1;
        if (ind == 0){
            indRem = arrRotatorlength -1
        }  

        arrRotator[indRem].classList.remove('rotator__case_active');  
        arrRotator[ind].classList.add('rotator__case_active');
        //console.log(arrRotator[ind].getAttribute("data-speed"));
        arrRotator[ind].style.color = arrRotator[ind].getAttribute("data-color");

         ++ind; 
        if (ind == arrRotatorlength){
            ind = 0
        }  
        
    }, 1000); 

