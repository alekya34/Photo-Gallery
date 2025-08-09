const images = document.querySelectorAll(".image-container img");
const modal = document.querySelector(".image-modal");
const modalImg = modal.querySelector("img");
const caption = modal.querySelector(".caption");
const closeBtn = modal.querySelector(".close-btn");
const prevBtn = modal.querySelector(".prev-btn");
const nextBtn = modal.querySelector(".next-btn");
const search = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");

let currentIndex = 0;

// Open modal on click
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(index);
    modal.style.display = "flex";
  });
});

// Show image in modal
function showImage(index) {
  const img = images[index];
  modalImg.src = img.src;
  caption.textContent = img.alt;
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "Escape") modal.style.display = "none";
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  }
});

// Search filter
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  images.forEach(img => {
    const alt = img.alt.toLowerCase();
    if (alt.includes(value)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
});
