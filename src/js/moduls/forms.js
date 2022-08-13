import { closeAllPopups, validate } from "./utils";
import mask from "./mask";
import postData from "../services/request";

const forms = () => {
  const allForms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    phoneInputs = document.querySelectorAll('input[name="phone"]'),
    emailInputs = document.querySelectorAll('input[name="email"]'),
    // nameInputs = document.querySelectorAll('input[name="name"]'),
    messageArea = document.querySelectorAll('textarea[name="message"]'),
    upload = document.querySelectorAll('[name="upload"]');

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  const regPhone = /^((\+7|7|8)+([0-9]){10})$/,
    regRus = /^[а-яё -]+$/i,
    regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  const message = {
    loading: "Идет загрузка данных",
    sucsess: "Спасибо! Скоро мы с вами свяжемся...",
    failure: "Что-то пошло не так, извините. Попробуйте еще раз позже...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const validateInputs = (elem, reg) => {
    elem.forEach((item) => {
      item.addEventListener("input", () => {
        validate(item, reg);
      });
    });
  };

  //   validateInputs(phoneInputs, regPhone);
  //   validateInputs(nameInputs, regRus);
  //   validateInputs(messageArea, regRus);
  //   validateInputs(emailInputs, regEmail);

  // ВАЛИДАЦИЯ ИЗ ОБРАЗЦА

  //   txtInputs.forEach(input => {
  //     input.addEventListener('keypress', function(e) {
  //         if (e.key.match(/[^а-яё 0-9]/ig)) {
  //             e.preventDefault();
  //         }
  //     });
  // });

  mask('[name="phone"]');

  upload.forEach((item) => {
    item.addEventListener("input", () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split(".");

      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
    messageArea.forEach((item) => {
      item.value = "";
    });
    upload.forEach((item) => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  allForms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.style.color = "#a12ab1";
      statusMessage.style.fontSize = "20px";
      statusMessage.textContent = message.loading;

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      // statusImg.classList.add("animated", "fadeInUp");

      item.parentNode.style.display = "flex";
      item.parentNode.style.flexDirection = "column";
      item.parentNode.style.justifyContent = "center";
      item.parentNode.style.alignContent = "center";

      item.parentNode.appendChild(statusMessage);
      statusMessage.parentNode.appendChild(statusImg);

      const formData = new FormData(item);
      let api;
      item.closest(".popup-design") || item.closest(".calc")
        ? (api = path.designer)
        : (api = path.question);
      console.log(api);

      postData(api, formData)
        .then((res) => {
          console.log(res);
          item.style.display = "none";
          // statusMessage.style.height = "300px";
          statusMessage.textContent = message.sucsess;
          statusImg.setAttribute("src", message.ok);
        })
        .catch(() => {
          item.style.display = "none";
          // statusMessage.style.height = "300px";
          statusMessage.textContent = message.failure;
          statusImg.setAttribute("src", message.fail);
        })
        .finally(() => {
          setTimeout(() => {
            closeAllPopups();
            statusMessage.remove();
            statusImg.remove();
            item.style.display = "block";
            clearInputs();
          }, 5000);
        });
    });
  });
};

// Образец

// const forms = () => {
//   const form = document.querySelectorAll("form"),
//     inputs = document.querySelectorAll("input"),
//     upload = document.querySelectorAll('[name="upload"]');

//   const message = {
//     loading: "Загрузка...",
//     success: "Спасибо! Скоро мы с вами свяжемся",
//     failure: "Что-то пошло не так...",
//     spinner: "assets/img/spinner.gif",
//     ok: "assets/img/ok.png",
//     fail: "assets/img/fail.png",
//   };

//   const path = {
//     designer: "assets/server.php",
//     question: "assets/question.php",
//   };

//   const postData = async (url, data) => {
//     let res = await fetch(url, {
//       method: "POST",
//       body: data,
//     });

//     return await res.text();
//   };

//   const clearInputs = () => {
//     inputs.forEach((item) => {
//       item.value = "";
//     });
//     upload.forEach((item) => {
//       item.previousElementSibling.textContent = "Файл не выбран";
//     });
//   };

//   upload.forEach((item) => {
//     item.addEventListener("input", () => {
//       console.log(item.files[0]);
//       let dots;
//       const arr = item.files[0].name.split(".");

//       arr[0].length > 6 ? (dots = "...") : (dots = ".");
//       const name = arr[0].substring(0, 6) + dots + arr[1];
//       item.previousElementSibling.textContent = name;
//     });
//   });

//   form.forEach((item) => {
//     item.addEventListener("submit", (e) => {
//       e.preventDefault();

//       let statusMessage = document.createElement("div");
//       statusMessage.classList.add("status");
//       item.parentNode.appendChild(statusMessage);

//       item.classList.add("animated", "fadeOutUp");
//       setTimeout(() => {
//         item.style.display = "none";
//       }, 400);

//       let statusImg = document.createElement("img");
//       statusImg.setAttribute("src", message.spinner);
//       statusImg.classList.add("animated", "fadeInUp");
//       statusMessage.appendChild(statusImg);

//       let textMessage = document.createElement("div");
//       textMessage.textContent = message.loading;
//       statusMessage.appendChild(textMessage);

//       const formData = new FormData(item);
//       let api;
//       item.closest(".popup-design") || item.classList.contains("calc_form")
//         ? (api = path.designer)
//         : (api = path.question);
//       console.log(api);

//       postData(api, formData)
//         .then((res) => {
//           console.log(res);
//           statusImg.setAttribute("src", message.ok);
//           textMessage.textContent = message.success;
//         })
//         .catch(() => {
//           statusImg.setAttribute("src", message.fail);
//           textMessage.textContent = message.failure;
//         })
//         .finally(() => {
//           clearInputs();
//           setTimeout(() => {
//             statusMessage.remove();
//             item.style.display = "block";
//             item.classList.remove("fadeOutUp");
//             item.classList.add("fadeInUp");
//           }, 5000);
//         });
//     });
//   });
// };

export default forms;
