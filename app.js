const button = document.querySelector('.btn-share');
const shareOptions = document.querySelector('.share-options');

const showFunction = () => {
    shareOptions.classList.toggle('hidden');
}

button.addEventListener('click', showFunction);