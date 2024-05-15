// Array of image filenames with correct paths
const images = [
    "../images/blog.png",
    "../images/design.png",
    "../images/essay.png",
    "../images/portfolio.png",
    "../images/profile.png"
];
let currentIndex = 0; // Start with the first image

// Function to display current image
function displayImage(index) {
    const image = document.getElementById("galleryImage");
    image.src = images[index];
}

// Event listener for previous button
document.getElementById("prevButton").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex);
});

// Event listener for next button
document.getElementById("nextButton").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
});

// Display the initial image
displayImage(currentIndex);
