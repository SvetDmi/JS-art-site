const tabs = (
  tabsSectionSelector,
  tabsSelector,
  tabsContentSelector,
  tabsNoContentSelector,
  activeClass
) => {
  const tabsSection = document.querySelector(tabsSectionSelector),
    tabs = tabsSection.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsNoContent = document.querySelector(tabsNoContentSelector);
  let count = [];

  function showTab(type) {
    tabsNoContent.style.display = "none";
    tabsContent.forEach((item, i) => {
      if (item.classList.contains(type)) {
        item.style.display = "block";
        item.classList.add("animated", "fadeIn");
        count[i] = 1;
      } else {
        item.style.display = "none";
        item.classList.remove("animated", "fadeIn");
        count[i] = 0;
      }
    });
    tabs.forEach((item) => {
      if (item.classList.contains(type)) {
        item.classList.add(activeClass);
      } else {
        item.classList.remove(activeClass);
      }
    });
  }

  showTab("all");

  tabsSection.addEventListener("click", (e) => {
    let target = e.target;

    if (target && target.nodeName == tabsSelector.toUpperCase()) {
      tabs.forEach((item) => {
        if (target == item) {
          let type = target.classList[0];
          showTab(type);
          if (!count.includes(1)) {
            tabsNoContent.style.display = "block";
          }
        }
      });
    }
  });
};

// tabsContent.forEach((item, i) => {
//   if (item.classList.contains(type)) {
//     count[i] = true;
//   } else {
//     count[i] = false;
//   }
//   // showNoTab(count);
// });
//           console.log(count);
//         }
//       });
//     }
//   });
// };

export default tabs;
