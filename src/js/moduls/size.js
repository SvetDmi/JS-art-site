const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector("img");
    // something.png => something-1.png
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
      p.style.display = "none";
    });
  }

  function hideImg(block) {
    const img = block.querySelector("img");
    // something-1.png => something.png
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach((p) => {
      p.style.display = "block";
    });
  }

  blocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};

export default pictureSize;

// Мое самостоятельное решение (более сложное)

// const size = () => {
//   function showSize(sizeSelectorSection, sizeSelectorElem, sizeSelectorImg) {
//     const sizeSection = document.querySelector(sizeSelectorSection),
//       sizeElem = document.querySelectorAll(sizeSelectorElem),
//       sizeImg = document.querySelectorAll(sizeSelectorImg);

//     const showPic = (img, index) => {
//       const path = `assets/img/sizes-${index + 1}.png`;
//       let pathPart = path.replace(".png", "");
//       let pathNew = `${pathPart}-1.png`;

//       img[index].setAttribute("src", pathNew);
//     };

//     const hiddenText = (elem) => {
//       const sizeText = elem.querySelectorAll("p");
//       sizeText.forEach((item) => {
//         item.style.display = "none";
//       });
//     };

//     const hiddenPic = (img, index) => {
//       const path = `assets/img/sizes-${index + 1}-1.png`;
//       let pathPart = path.replace("-1.png", "");
//       let pathNew = `${pathPart}.png`;
//       img[index].setAttribute("src", pathNew);
//     };

//     const showText = (elem) => {
//       const sizeText = elem.querySelectorAll("p");
//       sizeText.forEach((item) => {
//         item.style.display = "block";
//       });
//     };

//     sizeSection.addEventListener("mouseover", (e) => {
//       let target = e.target;

//       if (
//         (target &&
//           target.classList.contains(sizeSelectorElem.replace(/\./, ""))) ||
//         target.parentNode.classList.contains(sizeSelectorElem.replace(/\./, ""))
//       )
//         sizeElem.forEach((elem, i) => {
//           if (target == elem || target.parentNode == elem) {
//             showPic(sizeImg, i);
//             hiddenText(elem);
//           }
//         });
//     });

//     sizeSection.addEventListener("mouseout", (e) => {
//       let target = e.target;

//       if (
//         (target &&
//           target.classList.contains(sizeSelectorElem.replace(/\./, ""))) ||
//         target.parentNode.classList.contains(sizeSelectorElem.replace(/\./, ""))
//       )
//         sizeElem.forEach((elem, i) => {
//           if (target == elem || target.parentNode == elem) {
//             hiddenPic(sizeImg, i);
//             showText(elem);
//           }
//         });
//     });
//   }

//   showSize(".sizes-wrapper", ".sizes-block", ".sizes-block img:first-child");
// };

// export default size;
