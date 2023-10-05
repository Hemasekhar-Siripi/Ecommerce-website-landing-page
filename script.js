// JavaScript code for adding products to the cart

let cartItems = [];

function addToCart(productId) {
    if (productId === 1) {
        cartItems.push({ name: 'Laptop', price: 999.99 });
    } else if (productId === 2) {
        cartItems.push({ name: 'Smartphone', price: 799.99 });
    }

    alert('Product added to cart!');
    console.log('Cart Items:', cartItems);
}
