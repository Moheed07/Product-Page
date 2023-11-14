/**
 * The code defines a shopping cart in JavaScript and provides functions to add items to the cart and
 * view the cart's contents.
 * @param name - The name of the product being added to the cart.
 * @param price - The price parameter is the price of the product being added to the cart.
 */
let cart = [];

function addToCart(name, price) {
    cart.push({name: name, price: price, quantity: 1});
    alert('Product added to cart!');
}

document.getElementById('viewCart').addEventListener('click', function() {
    let cartContent = '';

    cart.forEach(function(item) {
        cartContent += `Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`;
    });

    alert('Cart Content: ' + cartContent);
});