export default class Cart {
  cartItems = [];
  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }
  addProduct(product) {
    if (!product) return;
    let isInCart = false;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === product.id) {
        this.cartItems[i].count++;
        this.onProductUpdate(this.cartItems[i]);
        isInCart = true;
      }
    }
    if (!isInCart) {
      this.cartItems.push({ product, count: 1 });
      this.onProductUpdate(this.cartItems[this.cartItems.length - 1]);
    }
  }
  
  updateProductCount(productId, amount) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === productId) {
        this.cartItems[i].count = this.cartItems[i].count + +amount;
        this.onProductUpdate(this.cartItems[i]);
        if (this.cartItems[i].count === 0) {
          this.cartItems.splice(i, 1);
        }
      }
    }
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    let result = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      result += this.cartItems[i].count;
    }
    return result;
  }

  getTotalPrice() {
    let resultPrice = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      resultPrice += this.cartItems[i].product.price * this.cartItems[i].count;
    }
    return resultPrice;
  }
  
  onProductUpdate(cartItems) {
    this.cartIcon.update(this);
  }
}
