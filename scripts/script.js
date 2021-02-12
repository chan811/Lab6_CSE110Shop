// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('ShopItems') != null) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('ShopItems', JSON.stringify(data)));
  }
  
  for (item in JSON.parse(localStorage.getItem('ShopItems'))) {
    let product = document.createElement('product-item');
    product.setAttribute('src', item['image']);
    product.setAttribute('alt', item['title']);
    product.setAttribute('title', item['title']);
    product.setAttribute('price', item['price']);
    productList = document.getElementById('product-list');
    productList.appendChild(product);
  }
});