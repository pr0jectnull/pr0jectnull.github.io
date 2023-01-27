
const messages = ["Welcome to project null", "We are glad you are here", "We released something onto the world that we cannot control", "Project Null"];
let index = 0;
const text = document.getElementById("text");
let index = 0;

function displayText() {
  text.innerHTML = messages[index];
}
setInterval(() => {
  displayText();
  index = (index + 1) % messages.length;
}, 3000);
