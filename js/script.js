// Modal Gallery
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const galleryItems = document.querySelectorAll('.gallery-item img');

let currentImageIndex = 0;
const galleryImages = Array.from(galleryItems);

function showImage(index) {
    currentImageIndex = index;
    modalImg.src = galleryImages[index].src;
    captionText.innerHTML = galleryImages[index].alt;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
}

// Update click handlers
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        modal.style.display = "block";
        showImage(index);
    });
});

// Add navigation click handlers
document.querySelector('.modal-nav.next').addEventListener('click', nextImage);
document.querySelector('.modal-nav.prev').addEventListener('click', prevImage);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.style.display === "block") {
        if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "ArrowLeft") {
            prevImage();
        } else if (e.key === "Escape") {
            modal.style.display = "none";
        }
    }
});

// Keep existing close handlers
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}