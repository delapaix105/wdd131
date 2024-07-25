// Product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'sugar.jpeg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'path-to-image-2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'path-to-image-3.jpg' },
    // Add more products as needed
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate featured products on home page
    const featuredProducts = document.getElementById('featured-products');
    if (featuredProducts) {
        const featuredHTML = products.slice(0, 3).map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            </div>
        `).join('');
        featuredProducts.innerHTML += featuredHTML;
    }

    // Populate product list on products page
    const productList = document.getElementById('product-list');
    if (productList) {
        const productHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
        productList.innerHTML = productHTML;
    }

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Form submitted:', formValues);
            // Here you would typically send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Update cart count
    updateCartCount();
});

// Add to cart functionality
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in UI
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.createElement('span');
    cartCount.textContent = `Cart (${cart.length})`;
    document.querySelector('nav ul').appendChild(cartCount);
}