// 1. Get the ID from the URL using the window.location object
let params = new URLSearchParams(window.location.search);
let productId = params.get('id');

function getProductDetails(id) {
    let url = "https://dummyjson.com/products/" + id;
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    xhr.send("");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let product = JSON.parse(xhr.responseText);
            let contentDiv = document.getElementById('details-content');

            contentDiv.innerHTML = `
                <img src="${product.images[0]}" class="detail-img">
                <h1>${product.title}</h1>
                <p><strong>Category:</strong> ${product.category}</p>
                <p>${product.description}</p>
                <h2>Price: $${product.price}</h2>
                <button onclick="goHome()" class="home-btn">Return to Home</button>
            `;
        }
    };
}

if (productId) {
    getProductDetails(productId);
}

function goHome() {
    window.location.href = "home.html";
}