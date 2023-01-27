const text = document.getElementById("text");
const messages = ["Welcome to project null", "We are glad you are here", "We have released something on the world we cannot control", "Project Null"];
let index = 0;

function displayText() {
  let glitch = "";
  for (let i = 0; i < messages[index].length; i++) {
    if (Math.random() < 0.1) {
      glitch += "&#x200B;";
    } else {
      glitch += messages[index][i];
    }
  }
  text.innerHTML = glitch;
}

setInterval(() => {
  displayText();
  index = (index + 1) % messages.length;
}, 10000);
