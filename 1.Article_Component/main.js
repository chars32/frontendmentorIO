const shareButton = document
  .getElementsByClassName("share-button")[0]
  .getElementsByTagName("figure")[0];

const arrowShare = shareButton.getElementsByTagName("img")[0];

const buttonMessage = document.getElementsByClassName("button_message_show")[0];

const textContainer = document.getElementsByClassName("text-container")[0];

let toggleButton = false;

// MOBILE
document.addEventListener("click", () => {
  if (event.target == textContainer) {
    console.log("iguales");
  }
});

// DESKTOP
// shareButton.addEventListener("click", () => {
//   toggleButton = !toggleButton;

//   if (toggleButton) {
//     shareButton.classList.add("change-color");
//     document.getElementsByClassName("button_message_show")[0].style.display =
//       "flex";
//     buttonMessage.classList.add("zoomIn");
//     buttonMessage.classList.remove("zoomOut");
//     arrowShare.setAttribute("src", "./images/icon-share-change.svg");
//     console.log("muestra boton");
//   } else {
//     shareButton.classList.remove("change-color");
//     buttonMessage.classList.remove("zoomIn");
//     buttonMessage.classList.add("zoomOut");
//     arrowShare.setAttribute("src", "./images/icon-share.svg");
//     console.log("esconde boton");
//   }
// });
