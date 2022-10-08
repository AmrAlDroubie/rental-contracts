const mainSwiper = new Swiper("#testimonials-swiper", {
  speed: 400,
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".full-screen-swiper-next",
    prevEl: ".full-screen-swiper-prev",
  },
  pagination: {
    el: ".full-screen-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },
});

function currentYear() {
  const footer_year = document.getElementById("footer-current-year");
  const date = new Date();
  const current_year = date.getFullYear();
  footer_year.textContent = current_year;
}
currentYear();

function footerScrollTop() {
  const topBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 700) {
      topBtn.style.transform = "translateX(0)";
    } else {
      topBtn.style.transform = "translateX(-250px)";
    }
  });

  topBtn.onclick = function () {
    window.scrollTo({
      top: 0,
    });
  };
}
footerScrollTop();

function counterScroll() {
  const elements = document.querySelectorAll("[data-goal]");
  const section = document.querySelector(".our-statics");
  let started = false;
  window.onscroll = function () {
    if (!started) {
      if (window.scrollY >= section.offsetTop - 550) {
        elements.forEach((ele) => {
          let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == ele.dataset.goal) clearInterval(count);
          }, 10);
        });

        started = true;
      }
    }
  };
}

if (document.querySelector(".our-statics")) {
  counterScroll();
}
