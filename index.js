console.log('Welcome to My Website!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const p = document.createElement('p');
    p.textContent = 'JS loaded successfully';
    p.id = 'js-status';
    document.querySelector('main').appendChild(p);
});
