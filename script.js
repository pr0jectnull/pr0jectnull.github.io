const text = document.getElementById("text");
const messages = ["Welcome to project null", "We are glad you are here", "We released something onto the world that we cannot control", "Project Null"];
let index = 0;

function displayText() {
  text.innerText = messages[index];
  let characters = text.getElementsByTagName("span");
  for (let i = 0; i < characters.length; i++) {
    if (Math.random() < 0.1) {
      characters[i].classList.add("glitch");
    } else {
      characters[i].classList.remove("glitch");
    }
  }
}

setInterval(() => {
  displayText();
  index = (index + 1) % messages.length;
}, 5000);
