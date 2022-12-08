const allSlides = document.querySelector(".slide-container").children;
const allThumbnails = document.querySelector(".thumbnail-column").children;
const slideWidth = allSlides[0].offsetWidth / 10;
let currentSlide = 0;
let currentThumbnail = 0;
let totalWidth = 0;
let viewSlide = 0;
let thumbnailInterval, slideInterval;

//Get All Slides Width
for (const slide of allSlides) {
  totalWidth -= slide.offsetWidth / 10;
}

function changeSlide() {
  slideInterval = setInterval(() => {
    viewSlide -= slideWidth;

    if (viewSlide == totalWidth) {
      viewSlide = 0;
    }

    allSlides[0].style.marginLeft = `${viewSlide}rem`;

    currentSlide += 1;

    if (currentSlide == allSlides.length) {
      currentSlide = 0;
    }
  }, 6000);
}
changeSlide();

function thumbnailActive() {
  thumbnailInterval = setInterval(() => {
    for (const thumbnail of allThumbnails) {
      thumbnail.classList.remove("active");
    }

    currentThumbnail += 1;

    if (currentThumbnail == allThumbnails.length) {
      currentThumbnail = 0;
    }

    allThumbnails[currentThumbnail].classList.add("active");
  }, 6000);
}
thumbnailActive();

function selectSlide() {
  for (let i = 0; i < allThumbnails.length; i++) {
    allThumbnails[i].addEventListener("click", function () {
      if (i != currentSlide) {
        viewSlide = -slideWidth * i;
        allSlides[0].style.marginLeft = `${viewSlide}rem`;

        allThumbnails[currentThumbnail].classList.remove("active");
        allThumbnails[i].classList.add("active");

        currentSlide = i;
        currentThumbnail = i;

        clearInterval(slideInterval);
        clearInterval(thumbnailInterval);
        changeSlide();
        thumbnailActive();
      }
    });
  }
}
selectSlide();
