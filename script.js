document.querySelectorAll(".project a").forEach((link) => {
  link.addEventListener("click", () => {
    alert("You are leaving the page to view this project.");
  });
});
