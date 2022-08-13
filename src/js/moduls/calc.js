const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promoSelector,
  priceSelector
) => {
  const size = document.querySelector(sizeSelector),
    material = document.querySelector(materialSelector),
    options = document.querySelector(optionsSelector),
    promo = document.querySelector(promoSelector),
    price = document.querySelector(priceSelector);
  let sum = 0;

  const calcPrice = () => {
    sum = Math.round(+size.value * +material.value + +options.value);

    if (size.value !== "" && material.value !== "") {
      price.style.color = "#a12ab1";
      price.style.fontSize = "20px";
      if (promo.value === "IWANTPOPART") {
        price.textContent = Math.round(sum * 0.7);
      } else price.textContent = sum;
    } else {
      price.textContent =
        "Для расчета нужно выбрать размер картины и материал картины";
      price.style.color = "red";
    }
  };
  size.addEventListener("change", calcPrice);
  material.addEventListener("change", calcPrice);
  options.addEventListener("change", calcPrice);
  promo.addEventListener("input", calcPrice);
};
export default calc;
