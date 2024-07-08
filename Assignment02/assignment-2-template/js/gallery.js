// Get references to the elements
const featuredImage = document.getElementById('featuredImage');
const imageCaption = document.getElementById('imageCaption');
const thumbnails = document.getElementById('thumbnails');

// Function to update the featured image and caption
function updateFeaturedImage(newSrc, newCaption) {
  featuredImage.src = newSrc;
  imageCaption.textContent = newCaption;
}

// Event listener for thumbnail clicks
thumbnails.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const newSrc = event.target.dataset.fullSrc;
    const newCaption = event.target.dataset.caption;
    updateFeaturedImage(newSrc, newCaption);
  }
});

// Initial image setup - You can set the initial featured image here
const initialImage = thumbnails.children[0].querySelector('img');
updateFeaturedImage(initialImage.dataset.fullSrc, initialImage.dataset.caption);