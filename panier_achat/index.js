document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = document.getElementById('total-price');

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.price').innerText);
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            total += price * quantity;
        });
        totalPrice.innerText = total.toFixed(2);
    }

    cartItems.forEach(item => {
        const plusBtn = item.querySelector('.plus');
        const minusBtn = item.querySelector('.minus');
        const deleteBtn = item.querySelector('.delete');
        const likeBtn = item.querySelector('.like');
        const quantityElement = item.querySelector('.quantity');

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity + 1;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 1) {
                quantityElement.innerText = quantity - 1;
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});
