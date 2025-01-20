/**
 *the script3 file is that handling the modal show and hide functionality
 *useScope: example3.js
 *author: ao chen
 *date: 2025-01-15
 */

// get the element with id "modal"
const modal = document.getElementById("modal")
// get the element with id "close"
const close = document.getElementById("close")
// get the element with id "open"
const open = document.getElementById("open")

// show modal
open.addEventListener("click", () => modal.classList.add("show-modal"))

// hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"))

// hide modal when clicking outside of it
window.addEventListener("click", (event) => {
event.target==modal?modal.classList.remove("show-modal"):false
});