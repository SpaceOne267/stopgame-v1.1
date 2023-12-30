function functUI() {
  const clickElements = document.querySelectorAll(".ui-click");
  for (let i = 0; i < clickElements.length; i++) {
    const el = clickElements[i];
    clickHandler(el);
  }
  function clickHandler(el) {
    el.addEventListener("click", () => {
      const data = el.dataset;
      const activeEl = data.el;

      const domEl = document.getElementById(activeEl);
      domEl.classList.toggle("active");
      console.log(data);
    });
  }
}
export default functUI;
