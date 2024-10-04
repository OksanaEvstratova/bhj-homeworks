const signin = document.getElementById('signin');
const welcome  = document.getElementById('welcome');
const signinBtn = document.querySelector('.btn');
const form = document.getElementById('signin__form');

signinBtn.classList.add('signin_active');

signinBtn.addEventListener('click', () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            if(xhr.readyState === xhr.DONE) {
                let result = JSON.parse(xhr.responseText);

                if (result.success) {
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    document.getElementById('user_id').textContent = result.user_id
                } else {
                    alert('Wrong log/pass')
                }
            }
        })
        const formData = new FormData(form);
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.send(formData);
    })
})





