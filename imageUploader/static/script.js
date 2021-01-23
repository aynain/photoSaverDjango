function clickHandle(e) {
  const card = e.target.closest(".card");
  if (card) openModal(card.querySelector(".column img"));

  const bottomListImage = e.target.closest(".bottomImagesContainer img");
  if (bottomListImage) showImage(bottomListImage);
}
window.addEventListener("click", clickHandle);

function openModal(imageElement) {
  document.getElementById("myModal").style.display = "block";
  showImage(imageElement);
}
function showImage(imageElement) {
  const allBottomImages = document.querySelectorAll(
    ".bottomImagesContainer img"
  );
  allBottomImages.forEach((img) => img.classList.remove("selected"));

  const bottomImage = document.querySelector(
    `.bottomImagesContainer [data-id="${imageElement.dataset.id}"]`
  );
  bottomImage.classList.add("selected");

  const sliderImage = document.querySelector(".sliderImage");
  sliderImage.dataset.id = imageElement.dataset.id;
  sliderImage.src = imageElement.src;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function previousImage() {
  const sliderImage = document.querySelector(".sliderImage");
  var prevChild;
  prevChild = document.querySelector(
    `.bottomImagesContainer [data-id="${sliderImage.dataset.id}"]`
  ).previousElementSibling;

  if (prevChild) showImage(prevChild);
}

function nextImage() {
  const sliderImage = document.querySelector(".sliderImage");
  var nextChild;
  nextChild = document.querySelector(
    `.bottomImagesContainer [data-id="${sliderImage.dataset.id}"]`
  ).nextElementSibling;

  if (nextChild) showImage(nextChild);
}
