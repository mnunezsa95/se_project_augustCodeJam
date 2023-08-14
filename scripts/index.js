/* ---------------------------------------------------------------------------------------------- */
/*                                            Carousel                                            */
/* ---------------------------------------------------------------------------------------------- */

const carousel = document.querySelector(".carousel"),
  firstItem = carousel.querySelectorAll(".gallery__image")[0],
  sliderButtons = document.querySelectorAll(".slider-button");

const chnageButtonStyle = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  sliderButtons[0].style.backgroundColor = carousel.scrollLeft == 0 ? "#172432" : "#ff7757";
  sliderButtons[1].style.backgroundColor = carousel.scrollLeft == scrollWidth ? "#172432" : "#ff7757";
};

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let firstItemWidth = firstItem.clientWidth + 14;
    carousel.scrollLeft += button.id == "left" ? -firstItemWidth : firstItemWidth;
    setTimeout(() => chnageButtonStyle(), 60);
  });
});

const carouselTraveler = document.querySelector(".traveler__carousel"),
  firstCard = carousel.querySelectorAll(".traveler__card")[0],
  carouselSliderButtons = document.querySelectorAll(".traveler__slider");

const chnageCarouselButtonStyle = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  carouselSliderButtons[0].style.backgroundColor = carousel.scrollLeft == 0 ? "#172432" : "#ff7757";
  carouselSliderButtons[1].style.backgroundColor = carousel.scrollLeft == scrollWidth ? "#172432" : "#ff7757";
};

carouselSliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let firstItemWidth = firstItem.clientWidth + 14;
    carousel.scrollLeft += button.id == "left" ? -firstItemWidth : firstItemWidth;
    setTimeout(() => chnageButtonStyle(), 60);
  });
});

/* ---------------------------------------------------------------------------------------------- */
/*                                          Newsletter                                            */
/* ---------------------------------------------------------------------------------------------- */
const newsletterSubmitButton = document.querySelector(".newsletter__subscribe-button");
const emailInputField = document.querySelector(".newsletter__input");
newsletterSubmitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  submitNewsletter();
  emailInputField.value = "";
});
const submitNewsletter = () => {
  emailInputField.textContent = emailInputField.value;
  console.log(emailInputField.textContent);
};
