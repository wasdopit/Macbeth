document.addEventListener("click", function(event) {
  const marks = document.querySelectorAll("mark");

  // Close all open tooltips
  marks.forEach(m => m.classList.remove("active"));

  // If you clicked a <mark>, toggle it
  if (event.target.tagName === "MARK") {
    event.target.classList.add("active");
    event.stopPropagation();
  }
});

// Prevent tooltips from closing if you click inside the tooltip text itself
document.querySelectorAll("mark").forEach(mark => {
  mark.addEventListener("click", function(e) {
    e.stopPropagation();
  });
});
