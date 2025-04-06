document.addEventListener('DOMContentLoaded', () => {
  const createCarouselSlides = (data, containerId) => {
    const container = document.querySelector(`#${containerId} .swiper-wrapper`);
    data.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `
        <div class="food-menu-card">
          <div class="card-banner">
            <img src="${item.image}" width="300" height="300" loading="lazy" alt="${item.title}" class="w-100">
            <div class="badge">-${item.discount}</div>
            <button class="btn food-menu-btn">Order Now</button>
          </div>
          <div class="wrapper">
            <p class="category">${item.title}</p>
            <div class="rating-wrapper">
              ${'<ion-icon name="star"></ion-icon>'.repeat(item.stars)}
              ${'<ion-icon name="star-outline"></ion-icon>'.repeat(5 - item.stars)}
            </div>
          </div>
          <h3 class="h3 card-title">${item.title}</h3>
          <div class="price-wrapper">
            <p class="price-text">Price:</p>
            <data class="price" value="${item.price.current}">$${item.price.current.toFixed(2)}</data>
            <del class="del">$${item.price.original.toFixed(2)}</del>
          </div>
        </div>
      `;
      container.appendChild(slide);
    });
  };

  // Populate carousels
  createCarouselSlides(carouselData.asianFoods, 'asian-carousel');
  createCarouselSlides(carouselData.japaneseFoods, 'japanese-carousel');
  createCarouselSlides(carouselData.drinks, 'drinks-carousel');

  // Initialize Swiper instances
  new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: false, // Disable pagination bullets
    breakpoints: {
      320: {
        slidesPerView: 1, // 1 slide for small screens
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2, // 2 slides for tablets
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3, // 3 slides for desktops
        spaceBetween: 20,
      },
    },
  });
});