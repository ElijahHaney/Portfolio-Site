let text = document.getElementById('text');
let image2 = document.getElementById('image2');
let image1 = document.getElementById('image1');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    image1.style.top = value * 0 + 'px';
    image2.style.top = value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';

})