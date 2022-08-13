const accordion = (headingSelector) => {
  const headings = document.querySelectorAll(headingSelector);

  headings.forEach((item) => {
    item.addEventListener("click", function () {
      headings.forEach((item) => (item.style.maxHeight = "0px"));
      this.classList.toggle("active-style");

      if (this.classList.contains("active-style")) {
        headings.forEach((item) => {
          item.style.maxHeight = "0px";
          item.nextElementSibling.style.maxHeight = "0px";
          item.nextElementSibling.classList.remove("active-content");
          item.classList.remove("active-style");
        });
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
        this.nextElementSibling.classList.add("active-content");
        this.classList.add("active-style");
      } else {
        this.style.maxHeight = "0px";
        this.nextElementSibling.style.maxHeight = "0px";
        this.nextElementSibling.classList.remove("active-content");
        this.classList.remove("active-style");
      }
    });
  });
};

// const accordion = (triggersSelector) => {
//   const btns = document.querySelectorAll(triggersSelector);

//   btns.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       this.classList.toggle("active-style");
//       this.nextElementSibling.classList.toggle("active-content");

//       if (this.classList.contains("active-style")) {
//         this.nextElementSibling.style.maxHeight =
//           this.nextElementSibling.scrollHeight + 80 + "px";
//       } else {
//         this.nextElementSibling.style.maxHeight = "0px";
//       }
//     });
//   });
// };

//   blocks = document.querySelectorAll(itemsSelector);

// blocks.forEach(block => {
//     block.classList.add('animated', 'fadeInDown');
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', function() {
//         if (!this.classList.contains('active')) {
//             btns.forEach(btn => {
//                 btn.classList.remove('active', 'active-style');
//             });
//             this.classList.add('active', 'active-style');
//         }
//     });
// });
// };

export default accordion;
