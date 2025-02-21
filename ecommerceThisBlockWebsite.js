document.addEventListener('DOMContentLoaded', function() {
            //  cart data from the localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // display each item
            const cartItemsContainer = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const proceedButton = document.getElementById('proceedToCheckout');

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-center">Your cart is currently empty.</p>';
                cartTotal.textContent = '£0.00';
                proceedButton.classList.add('disabled');
                proceedButton.setAttribute('href', '#');
            } else {
                let cartHTML = '';
                let total = 0;

                cart.forEach((item, index) => {
                    cartHTML += `
                <div class="cart-item d-flex justify-content-between mb-3">
                    <div>${item.name}</div>
                    <div>£${item.price.toFixed(2)}</div>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
                    total += item.price;
                });

                cartItemsContainer.innerHTML = cartHTML;
                cartTotal.textContent = `£${total.toFixed(2)}`;
            }

            // validation for phone nunber 
            document.querySelector('form').addEventListener('submit', function(event) {
                    const phoneInput = document.getElementById('phone');
                    const phoneValue = phoneInput.value.trim();

                    if (!/^\d+$/.test(phoneValue)) {
                        alert('Please enter a valid phone number (digits only).');
                        event.preventDefault();
                        return;

                        alert('Success! Your delivery is on the way.');
                    });
            });

        // remove item section
        function removeFromCart(index) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        }