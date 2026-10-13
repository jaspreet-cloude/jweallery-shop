const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const bagCount = document.querySelector(".bag-count");
const bagLink = document.querySelector(".bag-link");
const toast = document.querySelector(".toast");
const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");
let itemCount = 0;
let toastTimeout;

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    bagCount.textContent = String(itemCount);
    bagLink.setAttribute("aria-label", `Shopping bag, ${itemCount} ${itemCount === 1 ? "item" : "items"}`);
    toast.textContent = `${button.dataset.product} added to your bag`;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  });
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!newsletterForm.reportValidity()) return;
  formMessage.textContent = "Thank you for joining us. Look out for a little something in your inbox.";
  newsletterForm.reset();
});
