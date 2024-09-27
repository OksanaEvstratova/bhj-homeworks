const form = document.getElementById('form');
const progress = document.getElementById('progress');
const xhr = new XMLHttpRequest();


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form); 

    xhr.upload.addEventListener("progress", function (e) {
        progress.value = e.loaded / e.total
      },
    )  
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
        
})


