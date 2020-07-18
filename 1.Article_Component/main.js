const shareButton = document
  .getElementsByClassName("share-button")[0]
  .getElementsByTagName("figure")[0];

const arrowShare = shareButton.getElementsByTagName("img")[0];

const buttonMessage = document.getElementsByClassName("button_message")[0];

let toggleButton = false;

shareButton.addEventListener("click", () => {
  toggleButton = !toggleButton;

  if (toggleButton) {
    shareButton.classList.add("change-color");
    buttonMessage.classList.add("button_message_show");
    arrowShare.setAttribute("src", "./images/icon-share-change.svg");
  } else {
    shareButton.classList.remove("change-color");
    buttonMessage.classList.remove("button_message_show");
    arrowShare.setAttribute("src", "./images/icon-share.svg");
  }
});
