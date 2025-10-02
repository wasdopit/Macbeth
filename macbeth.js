document.addEventListener("click", function(event) {
  // close all notes
  document.querySelectorAll("mark").forEach(m => m.classList.remove("active"));

  // if you clicked a mark, toggle it
  if (event.target.tagName === "MARK") {
    event.target.classList.add("active");
    event.stopPropagation();
  }
});