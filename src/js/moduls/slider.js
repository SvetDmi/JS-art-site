const sliders = (
  sliderSelector,
  slidesSelector,
  direction,
  prevSelector,
  nextSelector
) => {
  let index = 1,
    paused = "false";

  const slides = document.querySelectorAll(slidesSelector),
    slider = document.querySelector(sliderSelector);

  function showSlides(n) {
    if (n > slides.length) {
      index = 1;
    }
    if (n < 1) {
      index = slides.length;
    }
    slides.forEach((item) => {
      item.style.display = "none";
      item.classList.add("animated");
    });
    slides[index - 1].style.display = "block";
  }

  showSlides(index);

  function plusSlides(n) {
    showSlides((index += n));
  }

  // Перемещение по клику

  try {
    const prev = document.querySelector(prevSelector),
      next = document.querySelector(nextSelector);
    if (prev !== null) {
      prev.addEventListener("click", () => {
        plusSlides(-1);
        slides[index - 1].classList.remove("slideInLeft");
        slides[index - 1].classList.add("slideInRight");
      });
    }
    if (next !== null) {
      next.addEventListener("click", () => {
        plusSlides(1);
        slides[index - 1].classList.remove("slideInRight");
        slides[index - 1].classList.add("slideInLeft");
      });
    }
  } catch (e) {
    console.error("Что-то не так с одним из слайдеров");
  }

  // Автоматическое перемещение

  function activateAnimation() {
    if (direction === "vertical") {
      paused = setInterval(function () {
        plusSlides(1);
        slides[index - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        slides[index - 1].classList.remove("slideInRight");
        slides[index - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }

  // activateAnimation();

  // Остановка перемещения, если мышка на слайдере

  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });

  // observer - отключает и включает анимацию в зависимости от ее видимости на экране
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.isIntersecting ? activateAnimation() : clearInterval(paused);
    });
  });

  observer.observe(slider);
};
export default sliders;
