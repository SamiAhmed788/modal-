const modalBtn = document.querySelector('#modalOpen')
const close = document.querySelector('#close')
const mBody = document.querySelector('#modalBody')



function openModal() {
    mBody.classList.remove('inactive')
    mBody.classList.add('active')
}

function closeModal() {
    mBody.classList.remove('active')
    mBody.classList.add('inactive')
}