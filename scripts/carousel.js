const carousel = document.querySelector(".carousel"),
    firstItem = carousel.querySelectorAll(".gallery__image")[0],
    sliderButtons = document.querySelectorAll(".slider-button");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const chnageButtonStyle = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    sliderButtons[0].style.backgroundColor = carousel.scrollLeft == 0 ? "#172432" : "#ff7757";
    sliderButtons[1].style.backgroundColor = carousel.scrollLeft == scrollWidth ? "#172432" : "#ff7757";
}

sliderButtons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstItemWidth = firstItem.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstItemWidth : firstItemWidth;
        setTimeout(() => chnageButtonStyle(), 60);
    });
});