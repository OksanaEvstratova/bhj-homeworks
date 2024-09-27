const request = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function getData() {
    if (request.readyState === request.DONE){
        let result = JSON.parse(request.responseText);

console.log(result)

        pollTitle.innerHTML = result["data"].title;

        answersArray = result["data"].answers;

        answersArray.forEach((item) =>{
            let buttonElement = document.createElement("button");
            buttonElement.className = "poll__answer"; 
            buttonElement.textContent = item
            pollAnswers.append(buttonElement);
            buttonElement.onclick = () => {
                alert('Спасибо, ваш голос засчитан!')
            }    
        })       
     }
}
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();
request.addEventListener('readystatechange', getData)