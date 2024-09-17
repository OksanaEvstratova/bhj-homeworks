controlsArray = Array.from(document.querySelectorAll('.product__quantity-control'))
controlsArray.forEach((item) =>{
    item.onclick = () =>{
        if(item.classList.contains('product__quantity-control_dec')){
            if (item.nextElementSibling.textContent > 1) {
                item.nextElementSibling.textContent--;
            } else {
                item.nextElementSibling.textContent = 1
            }
        }  else {
            item.previousElementSibling.textContent++
        }
    }
})


basket = document.querySelector('.cart__products');
buttonsArray = Array.from(document.querySelectorAll('.product__add'))
buttonsArray.forEach((item) =>{
    item.onclick = () =>{

        let inBusket = -1;
        cartsArray = Array.from(document.querySelectorAll('.cart__product'));
        cartsArray.forEach((cart, ind) =>{
            
            if (cart.getAttribute('data-id') == item.closest('.product').getAttribute('data-id')) {
                inBusket = ind;
            }
        })

        if (inBusket == -1) {

           let cartItem = document.createElement("div");
            cartItem.className = "cart__product";  
            cartItem.setAttribute('data-id', item.closest('.product').getAttribute('data-id'));
            basket.append(cartItem);   

            let imgItem = document.createElement("img");
            imgItem.className = "cart__product-image";  
            imgItem.src = item.closest('.product').querySelector('.product__image').src;
            cartItem.append(imgItem);

            let countItem = document.createElement("div");
            countItem.className = "cart__product-count";  
            countItem.textContent = item.closest('.product').querySelector('.product__quantity-value').textContent;
            cartItem.append(countItem);
  
        } else {
            currentCart = cartsArray[inBusket];
            cartsArray[inBusket].lastElementChild.textContent = parseInt(cartsArray[inBusket].lastElementChild.textContent)
                + parseInt(item.closest('.product').querySelector('.product__quantity-value').textContent);
        }
        

    }
})

