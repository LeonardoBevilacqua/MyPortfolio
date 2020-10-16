// get the modal and attributes
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modal-content");
const captionText = document.getElementById("caption");

// get the image and insert it inside the modal - use -its "alt" text as a caption
function setModalImage(img) {
    // display modal
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

}

// close modal
function closeModal() {
    modal.style.display = "none";
}