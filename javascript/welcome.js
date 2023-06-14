document.addEventListener("DOMContentLoaded", function(event) {
    var animation = document.getElementById("animation");
  
    document.addEventListener("mousemove", function(event) {
      // Update the position of the animation element based on the cursor coordinates
      animation.style.left = (event.clientX - 5) + "px";
      animation.style.top = (event.clientY - 5) + "px";
    });
  });