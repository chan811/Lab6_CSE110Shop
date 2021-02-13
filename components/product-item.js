// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor()
  {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    
    shadowRoot.innerHTML = `
      <style>
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
      </style>
      <li class="product">
        <img src="" alt="" width=200>
        <p class="title"></p>
        <p class="price"></p>
        <button onclick="">Add to Cart</button>
      </li>
      `; 
    
    
    this.itemid = 0;

    this.cartBtn = this.shadowRoot.children[1].children[3];
    this.cartCount = document.getElementById('cart-count');
    this.inCart = false;

    this.updateCart = this.updateCart.bind(this);

    this.cartBtn.onclick = this.updateCart;

    
  }

  connectedCallback() {
    
    let productArray = JSON.parse(localStorage.getItem('listProducts'));
    if (productArray[this.itemid] != null)
    {
      this.cartCount.innerHTML = String(Number(this.cartCount.innerHTML)+1);
      this.cartBtn.innerHTML = "Remove from Cart";
      this.inCart = true;
    }
    
  }
  
  updateCart() {
    if (!this.inCart) {
      alert('Added to Cart!');
      this.cartCount.innerHTML = String(Number(this.cartCount.innerHTML)+1);
      this.cartBtn.innerHTML = "Remove from Cart";
      this.inCart = true;
      
      let productArray = JSON.parse(localStorage.getItem('listProducts'));
      productArray[this.itemid] = this;
      localStorage.setItem('listProducts', JSON.stringify(productArray));
    }
    else {
      alert('Removed from Cart!');
      this.cartCount.innerHTML = String(Number(this.cartCount.innerHTML)-1);
      this.cartBtn.innerHTML = "Add to Cart";
      this.inCart = false;
      
      let productArray = JSON.parse(localStorage.getItem('listProducts'));
      productArray[this.itemid] = null;
      localStorage.setItem('listProducts', JSON.stringify(productArray));
    }
    
  }
  

  


}

customElements.define('product-item', ProductItem);