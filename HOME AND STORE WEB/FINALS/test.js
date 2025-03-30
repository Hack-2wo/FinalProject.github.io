// JavaScript for Carousel
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Variables
    let currentSlide = 0;
    const totalSlides = slideElements.length;

    // Functions to update the slide position
    const updateSlidePosition = () => {
        const offset = currentSlide * -100; // Calculate the translateX value
        slides.style.transform = `translateX(${offset}%)`;
    };

    const moveToNextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
        updateSlidePosition();
    };

    const moveToPreviousSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
        updateSlidePosition();
    };

    // Event Listeners for the arrows
    leftArrow.addEventListener("click", moveToPreviousSlide);
    rightArrow.addEventListener("click", moveToNextSlide);
});
