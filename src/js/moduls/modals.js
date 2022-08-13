import { closeAllPopups } from "./utils";

const modals = () => {
  let triggerPressed = false;

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector),
      scroll = calcScroll();

    trigger.forEach((element) => {
      element.addEventListener("click", (e) => {
        triggerPressed = true;
        if (e.target) {
          e.preventDefault();
        }
        if (e.target.classList.contains("fixed-gift")) {
          element.style.display = "none";
        }
        closeAllPopups();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.forEach((element) => {
      element.addEventListener("click", (e) => {
        // if (
        //   e.target.parentNode.parentNode.parentNode.classList.contains(
        //     "popup-gift"
        //   )
        // ) {
        //   trigger[0].style.display = "inline";
        // }
        closeAllPopups();
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        // closeAllPopups();
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove("modal-open");
        // if (e.target.classList.contains("popup-gift")) {
        //   trigger[0].style.display = "inline";
        // }
      }
    });
  }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.visibility = "hidden";
    div.style.overflowY = "scroll";
    document.body.appendChild(div);
    let scrollWight = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWight;
  }

  function showModalInTime(modalSelector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });
      if (!display) {
        document.querySelector(modalSelector).style.display = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      if (
        !triggerPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(".button-design", ".popup-design", ".popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-close");
  openByScroll(".fixed-gift");

  // showModalInTime(".popup-consultation", 5000);
};

export default modals;
