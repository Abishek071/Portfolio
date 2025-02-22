const para = document.querySelectorAll(".items .paragraph");
var size = window.innerWidth;
console.log(size);

window.addEventListener("resize", (e) => {
  size = window.innerWidth;
});

if (window.innerWidth <= 900) {
  para.forEach((item) => {
    item.classList.add("ellipsis");
  });
} else {
  para.forEach((item) => {
    item.classList.remove("ellipsis");
  });
}

if (size <= 900) {
  para.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("ellipsis");
    });
  });
}
