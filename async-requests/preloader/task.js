const request = new XMLHttpRequest();
const loaderElement = document.getElementById('loader');
const itemsElement = document.getElementById('items');



function getData() {
    if (request.readyState === request.DONE){
        let result = JSON.parse(request.responseText);

//console.log(result)

        Object.keys(result.response.Valute).forEach(function(key) {

            let itemElement = document.createElement("div");
            itemElement.className = "item";  
            itemsElement.append(itemElement);

            let codeElement = document.createElement("div");
            codeElement.className = "item__code";  
            codeElement.textContent = result.response.Valute[key].CharCode;
            itemElement.append(codeElement);

            let valueElement = document.createElement("div");
            valueElement.className = "item__value";  
            valueElement.textContent = result.response.Valute[key].Value;
            itemElement.append(valueElement);

            let currencyElement = document.createElement("div");
            currencyElement.className = "item__currency";  
            currencyElement.textContent = 'руб.';
            itemElement.append(currencyElement);
 
        })

        loaderElement.classList.remove('loader_active');
    }
}


request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();
request.addEventListener('readystatechange', getData)