// const elCardBtns = document.querySelectorAll(".card-btn");
// elCardBtns.forEach((cardBtn) => {
//   cardBtn.addEventListener("mouseenter", onCardBtnHover);
//   cardBtn.addEventListener("mouseleave", onCardBtnOut);
// });
// function onCardBtnHover(ev) {
//   var spanNav = ev.target.dataset.span;
//   ev.toElement.firstElementChild.innerText = "➡";
// }

// function onCardBtnOut(ev) {
//   var spanNum = ev.target.dataset.span;
//   document.querySelector(`.btn${spanNum} span`).innerText = "";
// }
function toggleMenu() {
  document.body.classList.toggle("menu-open");
}
