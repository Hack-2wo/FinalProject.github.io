// Open modal when item is added to cart
function addToCart() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Close modal when clicking on the close button
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Optional: Close modal when clicking outside the modal
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };