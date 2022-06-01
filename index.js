const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const line = $(".line");

// clickToSwap
tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.addEventListener("onclick", function () {
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

// moveMouseToSwap
tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.addEventListener("mousemove", function () {
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

// moveMouseToStopAutoSwap
$(".tabs").addEventListener("mouseover", function () {
  isPause = true;
});
$(".tabs").addEventListener("mouseout", function () {
  isPause = false;
});

var isPause = false;
var curIndex = 0;

setInterval(function () {
  if (!isPause) {
    active(curIndex);

    if (curIndex == tabs.length - 1) {
      curIndex = 0;
    } else {
      ++curIndex;
    }
  }
}, 1000);

function active(curIndex) {
  var pane = panes[curIndex];
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });
  panes.forEach(function (pane) {
    pane.classList.remove("active");
  });

  tabs[curIndex].classList.add("active");
  pane.classList.add("active");

  line.style.width = tabs[curIndex].offsetWidth + "px";
  line.style.left = tabs[curIndex].offsetLeft + "px";
}


// arrowKeyboardToSwap
//  não bé quá k load đc
