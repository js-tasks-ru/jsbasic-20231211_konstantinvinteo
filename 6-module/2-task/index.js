export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createCard();
    this.addButtonListener();
  }

  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTop = document.createElement("div");
    cardTop.classList.add("card__top");

    const image = document.createElement("img");
    image.src = `/assets/images/products/${this.product.image}`;
    image.alt = "product";
    image.classList.add("card__image");
    cardTop.appendChild(image);

    const price = document.createElement("span");
    price.classList.add("card__price");
    price.textContent = `€${this.product.price.toFixed(2)}`;
    cardTop.appendChild(price);

    card.appendChild(cardTop);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card__body");

    const title = document.createElement("div");
    title.classList.add("card__title");
    title.textContent = this.product.name;
    cardBody.appendChild(title);

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("card__button");

    const icon = document.createElement("img");
    icon.src = "/assets/images/icons/plus-icon.svg";
    icon.alt = "icon";
    button.appendChild(icon);

    cardBody.appendChild(button);
    card.appendChild(cardBody);

    return card;
  }

  addButtonListener() {
    const addButton = this.elem.querySelector(".card__button");
    addButton.addEventListener("click", () => {
      const event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
    });
  }
}

const product = {
  name: "Laab kai chicken salad",
  price: 10,
  category: "salads",
  image: "laab_kai_chicken_salad.png",
  id: "laab-kai-chicken-salad",
};

const productCard = new ProductCard(product);
document.body.appendChild(productCard.elem);
