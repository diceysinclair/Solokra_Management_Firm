
// Array of images to cycle through
const images = [
  'images/74bebf45-08e1-42e8-8eaa-e4a064a9875d.webp', // Replace with your image paths
  'images/IMG-20250217-WA0056.jpg',
  'images/0fdc165e-f91f-4697-84ee-abb1237f3d00.webp'
];

let currentIndex = 0;
const sliderImg = document.getElementById('slider-img');

function changeImage() {
  // Fade out
  sliderImg.style.opacity = 0;
  // After fade-out transition, change the image source and fade in
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
    sliderImg.style.opacity = 1;
  }, 1000); // Match this delay with the CSS transition duration (1s)
}

// Change image every 5 seconds
setInterval(changeImage, 5000);
