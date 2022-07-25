
export default function main() {

let header = document.querySelector(".header");
let sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");
  
  }
  
}