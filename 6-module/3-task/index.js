import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.createCarousel();
    this.addArrowListeners();
    this.hideArrows();
  }

  createCarousel() {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel__inner");

    this.slides.forEach((slide) => {
      const slideElem = document.createElement("div");
      slideElem.classList.add("carousel__slide");

      const img = document.createElement("img");
      img.src = slide.image;
      img.alt = slide.title;
      img.classList.add("carousel__img");

      const carouselButton = document.createElement("button");
      carouselButton.type = "button";
      carouselButton.classList.add("carousel__button");
      carouselButton.addEventListener("click", () => {
        const event = new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true,
        });
        carousel.dispatchEvent(event);
      });

      slideElem.appendChild(img);
      slideElem.appendChild(carouselButton);
      carouselInner.appendChild(slideElem);
    });

    carousel.appendChild(carouselInner);

    const carouselArrowLeft = document.createElement("div");
    carouselArrowLeft.classList.add("carousel__arrow", "carousel__arrow_left");

    const carouselArrowRight = document.createElement("div");
    carouselArrowRight.classList.add(
      "carousel__arrow",
      "carousel__arrow_right"
    );

    carousel.appendChild(carouselArrowLeft);
    carousel.appendChild(carouselArrowRight);

    return carousel;
  }

  addArrowListeners() {
    const carouselArrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const carouselArrowRight = this.elem.querySelector(
      ".carousel__arrow_right"
    );

    carouselArrowLeft.addEventListener("click", () => {
      this.prevSlide();
    });

    carouselArrowRight.addEventListener("click", () => {
      this.nextSlide();
    });
  }

  hideArrows() {
    const carouselArrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const carouselArrowRight = this.elem.querySelector(
      ".carousel__arrow_right"
    );

    carouselArrowLeft.style.display = "none";
    if (this.slides.length <= 1) {
      carouselArrowRight.style.display = "none";
    }
  }

  nextSlide() {
    const carouselInner = this.elem.querySelector(".carousel__inner");
    const slideWidth = carouselInner.offsetWidth;
    this.currentSlideIndex++;

    carouselInner.style.transform = `translateX(-${
      slideWidth * this.currentSlideIndex
    }px)`;

    const carouselArrowLeft = this.elem.querySelector(".carousel__arrow_left");
    carouselArrowLeft.style.display = "block";

    if (this.currentSlideIndex === this.slides.length - 1) {
      const carouselArrowRight = this.elem.querySelector(
        ".carousel__arrow_right"
      );
      carouselArrowRight.style.display = "none";
    }
  }

  prevSlide() {
    const carouselInner = this.elem.querySelector(".carousel__inner");
    const slideWidth = carouselInner.offsetWidth;
    this.currentSlideIndex--;

    carouselInner.style.transform = `translateX(-${
      slideWidth * this.currentSlideIndex
    }px)`;

    const carouselArrowRight = this.elem.querySelector(
      ".carousel__arrow_right"
    );
    carouselArrowRight.style.display = "block";

    if (this.currentSlideIndex === 0) {
      const carouselArrowLeft = this.elem.querySelector(
        ".carousel__arrow_left"
      );
      carouselArrowLeft.style.display = "none";
    }
  }
}
