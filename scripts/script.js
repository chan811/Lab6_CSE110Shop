// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('ShopItems') == null) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('ShopItems', JSON.stringify(data)));

    
  }

  if (localStorage.getItem('listProducts') == null) {
    var productArray = [];
    localStorage.setItem('listProducts', JSON.stringify(productArray));
  }
  
  const items = JSON.parse(localStorage.getItem('ShopItems'));

  for (key in items) {
    let product = document.createElement('product-item');
    
    product.shadowRoot.children[1].children[0].src = items[key]['image'];
    product.shadowRoot.children[1].children[0].alt = items[key]['title'];
    product.shadowRoot.children[1].children[1].innerHTML = items[key]['title'];
    product.shadowRoot.children[1].children[2].innerHTML = '$' + items[key]['price'];

    product.itemid = items[key]['id'];

    productList = document.getElementById('product-list');
    productList.appendChild(product);
    
  }
});


