// const shareButton = document
//   .getElementsByClassName("share-button")[0]
//   .getElementsByTagName("figure")[0];

// const arrowShare = shareButton.getElementsByTagName("img")[0];

// const buttonMessage = document.getElementsByClassName("button_message_show")[0];

// const textContainer = document.getElementsByClassName("text-container")[0];

let toggleButton = false;

// MOBILE
const buttonMessageShow = document.querySelector('.button_message_show');

const arrowShareButton = document.querySelector('.share-button').querySelector('figure').querySelector('img')

const arrowShareFigure = document.querySelector('.share-button').querySelector('figure')

buttonMessageShow.style.display = "none";

document.addEventListener('click', () => {
  if(event.target == arrowShareButton){
    toggleButton = !toggleButton

    if (toggleButton == true){
      buttonMessageShow.style.display = 'flex';
      arrowShareFigure.style.zIndex = '99';
      arrowShareFigure.style.backgroundColor = 'var(--body-txttwo-color)'
      arrowShareButton.setAttribute("src", "./images/icon-share-change.svg")
    }else if(toggleButton == false) {
      buttonMessageShow.style.display = 'none';
      arrowShareButton.setAttribute("src", "./images/icon-share.svg")
    }
  } 
})

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
