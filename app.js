// Sample product data
const products = [
    { id: 1, name: 'Product A', price: 10.99 , img: 'resources/allan-lainez-PWPMAdpgX2k-unsplash.jpg' },
    { id: 2, name: 'Product B', price: 14.99, img: 'resources/bakd-raw-by-karolin-baitinger-0vZ1pugZHjU-unsplash.jpg' },
    { id: 3, name: 'Product C', price: 8.99, img: 'resources/caramel-kovih2brC9Q-unsplash.jpg' },
    { id: 4, name: 'Product D', price: 12.99, img: 'resources/frank-holleman-Eh1mq33PQDo-unsplash.jpg' },
    { id: 5, name: 'Product E', price: 19.99, img: 'resources/zhang-liven-VVTVid1y3Qc-unsplash.jpg' },
];

// Function to render products
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'bg-white p-4 rounded-md shadow-md';
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-full h-72 object-cover mb-4 rounded">
            <h3 class="text-lg font-bold">${product.name}</h3>
            <p class="text-gray-600">R${product.price.toFixed(2)}</p>
            <button class="mt-2 bg-green-500 hover:bg-green-700 text-white p-2 rounded add-to-cart">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to sort products
function sortProducts(sortBy) {
    if (sortBy === 'name') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
        products.sort((a, b) => a.price - b.price);
    }
    renderProducts(products);
}

// Event listeners
document.getElementById('sort').addEventListener('change', (event) => {
    sortProducts(event.target.value);
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        alert('Product added to cart!');
    }
});

// Initial render
renderProducts(products);
