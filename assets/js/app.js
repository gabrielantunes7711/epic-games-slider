const allSlides = document.querySelector(".slide-container").children;
const allThumbnails = document.querySelector(".thumbnail-column").children;
let currentSlide = 0;
let currentThumbnail = 0;
let thumbnailInterval, slideInterval;

function changeSlide() {
  slideInterval = setInterval(() => {
    for (const slide of allSlides) {
      slide.classList.remove("active");
    }

    for (const slide of allSlides) {
      slide.classList.remove("out");
    }

    allSlides[currentSlide].classList.add("out");

    currentSlide += 1;

    if (currentSlide == allSlides.length) {
      currentSlide = 0;
    }
    allSlides[currentSlide].classList.add("active");
  }, 4000);
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
  }, 4000);
}
thumbnailActive();

function selectSlide() {
  for (let i = 0; i < allThumbnails.length; i++) {
    allThumbnails[i].addEventListener("click", function () {
      if (i != currentSlide) {
        for (const slide of allSlides) {
          slide.classList.remove("active");
        }

        for (const slide of allSlides) {
          slide.classList.remove("out");
        }

        allSlides[currentSlide].classList.add("out");
        allSlides[i].classList.add("active");

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
