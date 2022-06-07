const cartBtn = document.querySelector('#cart-btn');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart__close')


cartBtn.addEventListener('click', toggleCart)
cartClose.addEventListener('click', toggleCart)

function toggleCart() {
    cart.classList.toggle('cart--active');
}