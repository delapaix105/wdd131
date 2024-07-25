document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        { name: 'Stylish Jacket', price: '$49.99', image: 'images/jacket.jpeg' },
        { name: 'Summer Dress', price: '$39.99', image: 'images/dress.jpeg' },
        { name: 'Classic Hat', price: '$19.99', image: 'images/hat.jpeg' },
        { name: 'Leather Boots', price: '$89.99', image: 'images/boot.jpeg' }
    ];

    const featuredProductsContainer = document.getElementById('featured-products');
    featuredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        featuredProductsContainer.appendChild(productElement);
    });


    // Products for Shop page
    const products = [
        { name: 'Stylish Jacket', price: '$49.99', image: 'images/jacket.jpeg', category: 'clothing' },
        { name: 'Summer Dress', price: '$39.99', image: 'images/dress.jpeg', category: 'clothing' },
        { name: 'Classic Hat', price: '$19.99', image: 'images/hat.jpeg', category: 'accessories' },
        { name: 'Leather Boots', price: '$89.99', image: 'images/boot.jpeg', category: 'clothing' },
        { name: 'Elegant Scarf', price: '$29.99', image: 'images/scarf.jpeg', category: 'accessories' }
    ];

    const productGrid = document.getElementById('product-grid');
    const cartPreview = document.getElementById('cart-preview');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            `;
            productGrid.appendChild(productElement);
        });
    }

    function filterProducts() {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const filteredProducts = products.filter(product => {
            return (product.name.toLowerCase().includes(searchQuery) || searchQuery === '') &&
                   (product.category === selectedCategory || selectedCategory === 'all');
        });
        displayProducts(filteredProducts);
    }

    window.addToCart = function(productName) {
        const product = products.find(p => p.name === productName);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartPreview();
    }

    function displayCartPreview() {
        cartPreview.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - ${item.price}</p>
            `;
            cartPreview.appendChild(cartItem);
        });
    }

    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);

    displayProducts(products);
    displayCartPreview();
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const productGrid = document.getElementById('product-grid');
    const cartPreview = document.getElementById('cart-preview');

    // Function to add product to the cart
    function addToCart(product) {
        const cartItem = cart.find(item => item.name === product.name);
        if (cartItem) {
            cartItem.quantity += 1;
            cartItem.totalPrice += product.price;
        } else {
            cart.push({ ...product, quantity: 1, totalPrice: product.price });
        }
        renderCart();
    }

    // Function to render cart items
    function renderCart() {
        cartPreview.innerHTML = '';
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <p>${item.name}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${item.totalPrice.toFixed(2)}</p>
            `;
            cartPreview.appendChild(cartItemDiv);
        });
    }

    // Adding event listeners to "Add to Cart" buttons
    productGrid.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productItem = event.target.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = parseFloat(productItem.querySelector('p').textContent.replace('Price: $', ''));
            addToCart({ name: productName, price: productPrice });
        }
    });
});
