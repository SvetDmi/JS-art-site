const closeAllPopups = () => {
  const allPopups = document.querySelectorAll("[data-modal]");
  allPopups.forEach((item) => {
    item.style.display = "none";
    document.body.style.overflow = "";
    item.classList.add("animated", "fadeIn");
  });
};

const validate = (item, reg) => {
  if (reg.test(item.value) || item.value === "") {
    item.style.border = "none";
    return true;
  } else {
    item.style.border = "red solid 3px";
    return false;
  }
};

export { closeAllPopups, validate };
