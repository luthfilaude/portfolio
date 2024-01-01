window.onscroll = function () {
  const e = document.querySelector("header");
  var t = e.offsetTop;
  window.pageYOffset > t
    ? e.classList.add("navbar-fixed")
    : e.classList.remove("navbar-fixed");
};
const hamburger = document.querySelector("#hamburger"),
  navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active"),
    navMenu.classList.toggle("hidden");
});
var form = document.getElementById("my-form");
async function handleSubmit(e) {
  e.preventDefault();
  var t = document.getElementById("notification"),
    n = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: n,
    headers: { Accept: "application/json" },
  })
    .then((e) => {
      e.ok
        ? ((t.innerHTML = "Thanks for your submission!"), form.reset())
        : e.json().then((e) => {
            Object.hasOwn(e, "errors")
              ? (t.innerHTML = e.errors.map((e) => e.message).join(", "))
              : (t.innerHTML =
                  "Oops! There was a problem submitting your form");
          });
    })
    .catch((e) => {
      t.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit),
  (document.getElementById("currentYear").textContent =
    new Date().getFullYear());
