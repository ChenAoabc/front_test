/**
 *the script2 file is that handling the toggle navigation functionality of the website.
 *it contains the following functions:
 *- closeNavbar: function to close navbar if user clicks anywhere outside of navbar once it`s opened
 *useScope: example3.js
 *author: ao chen
 *date: 2025-01-15
 */

// get the toggle nav button element
const toggle = document.getElementById("toggle")
// get the nav element
const navbar = document.getElementById("navbar")

// this Function close navbar if user clicks anywhere outside of navbar once it`s opened
// Does not leave unused event listener on 
// it`s messy,but it works
function closeNavbar(event) {
    if(
        document.body.classList.contains("show-nav") &&
        event.target!== toggle &&
        !toggle.contains(event.target) &&
        event.target!== navbar &&
        !navbar.contains(event.target)
    ){
        document.body.classList.toggle("show-nav");
        document.body.removeEventListener("click", closeNavbar);
    }else if(!document.body.classList.contains("show-nav")){
        document.body.addEventListener("click", closeNavbar);
    }
}

// handle the click event of Toggle nav
toggle.addEventListener("click", () => {
  // click event of toggle  body add class style to show navbar
  document.body.classList.toggle("show-nav");
  // body add event to close navbar when clicked outside
  document.body.addEventListener("click", closeNavbar);
})
