function showModalByTime(selector, time) {
  setTimeout(function () {
    let display;

    document.querySelectorAll("[data-modal]").forEach((item) => {
      if (getComputedStyle(item).display !== "none") {
        display = "block";
      }
    });

    if (!display) {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }
  }, time);
}
