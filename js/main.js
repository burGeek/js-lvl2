class Products {
  data = [];
  products = [];
  container = null;

  constructor(selector) {
    this.container = document.querySelector(selector);
    this._fetchData();
    this._render();
  }

  sumPriceProduts() {
      let sum = 0;
      for (let product of this.products){
          sum += product.price
      }
      return sum;
  }

  _fetchData() {
    this.data = [
      { title: "Notebook", id: 1, price: 2000 },
      { title: "Keyboard", id: 2, price: 200 },
      { title: "Mouse", id: 3, price: 100 },
      { title: "Gamepad", id: 4, price: 87 },
    ];
  }

  _render() {
    for (let data of this.data) {
      const product = new ProductItem(data);
      this.products.push(product);
      this.container.insertAdjacentHTML("beforeend", product.render());
    }
  }
}

class ProductItem {
  title = "";
  price = 0;
  id = 0;
  img = "";

  constructor(product, img = "https://placehold.it/200x150") {
    ({ title: this.title, price: this.price, id: this.id } = product);
    this.img = img;
  }

  render() {
    return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`;
  }
}

class Cart {
  //goods = []; - массив с товарами корзины
  //addItem - метод добавления товара в корзину
  //totalPrice - метод для подсчета итоговой суммы
  //deleteItem - метод удаления товара из корзины
}

class CartItem {
  // constructor - this.title,this.price,this.id, this.img,this.quantity;
  //render - метод для отрисовки разметки для элемента корзины
}

const list = new Products(".products");
console.log(list.sumPriceProduts())
