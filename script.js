let imageIndex = 0;
const images = ["2.webp","3.jpg","4.webp","5.webp",]; // array of image URLs

document.getElementById('slideImg').addEventListener('animationiteration', function() {
  imageIndex = (imageIndex + 1) % images.length; // increment image index, wrap around to 0 if necessary
  this.src = images[imageIndex]; // update image src
});
