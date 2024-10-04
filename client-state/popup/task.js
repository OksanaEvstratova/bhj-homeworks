const subscribeModal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + value;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(p => p.startsWith(name + '='));
    return cookie == null
}

if (getCookie('modalWindow')) {
    subscribeModal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    setCookie('modalWindow', 'closed');
})