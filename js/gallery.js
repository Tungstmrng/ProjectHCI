const mainImages = document.querySelectorAll(".main-img img");
const thumbnails = document.querySelectorAll(".thumb-list div");

const changeImage = (index, mainImages, thumbnails) => {
  mainImages.forEach((img) => img.classList.remove("active"));
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  mainImages[index].classList.add("active");
  thumbnails[index].classList.add("active");
};

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, mainImages, thumbnails);
  });
});
