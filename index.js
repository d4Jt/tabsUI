const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const line = $(".line");

tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.addEventListener("click", function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    panes.forEach(function (pane) {
      pane.classList.remove("active");
    });

    this.classList.add("active");
    pane.classList.add("active");

    line.style.width = this.offsetWidth + "px";
    line.style.left = this.offsetLeft + "px";
  });
});


