const panels = document.querySelectorAll(".panel");

// A function to toggle the open class
function toggleOpen() {
  this.classList.toggle("open");
}

// A function to toggle the open-active class
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// Add event listeners to panels for click and transition end events
panels.forEach((element) => element.addEventListener("click", toggleOpen));
panels.forEach((element) =>
  element.addEventListener("transitionend", toggleActive)
);
