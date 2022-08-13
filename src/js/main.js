import modals from "./moduls/modals";
import styles from "./moduls/styles";
import forms from "./moduls/forms";
import sliders from "./moduls/slider";
import picterSize from "./moduls/size";
import tabs from "./moduls/tabs";
import calc from "./moduls/calc";
import accordion from "./moduls/accordion";
import burger from "./moduls/burger";
import scrolling from "./moduls/scrolling";
import drop from "./moduls/drop";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  modals();
  styles();
  forms();
  // sliders(".main-slider", ".main-slider-item", "vertical");
  // sliders(
  //   ".feedback-slider",
  //   ".feedback-slider-item",
  //   "horizontal",
  //   ".main-prev-btn",
  //   ".main-next-btn"
  // );
  picterSize(".sizes-block");
  tabs(".portfolio-menu", "li", ".portfolio-block", ".portfolio-no", "active");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  accordion(".accordion-heading");
  burger(".burger-menu", ".burger");
  scrolling(".pageup");
  drop();
});
