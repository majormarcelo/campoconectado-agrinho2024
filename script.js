document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    function showImage(index) {
    images.forEach((img, i) => {
    img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    }
    setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
    }, 3000);
   });