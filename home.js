function getProducts() {
    let url = "https://dummyjson.com/products?limit=30";
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    xhr.send("");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let products = data.products;
            let container = document.getElementById('product-slider');
            
            container.innerHTML = ""; 

            for (let i = 10; i < products.length; i++) {
                // Create the product card
                let card = document.createElement('div');
                card.className = 'product-card';
                
                card.onclick = function() {
                    window.location.href = "details.html?id=" + products[i].id;
                };

                card.innerHTML = `
                    <img src="${products[i].thumbnail}" alt="${products[i].title}">
                    <h3>${products[i].title}</h3>
                    <p>$${products[i].price}</p>
                `;
                
                container.appendChild(card);
            }
        }
    };
}

getProducts();