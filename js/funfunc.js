var char = 0;
var consoleText = 'Test';
var typeSpeed = 75;

function typeWriter() {
  if (char < consoleText.length) {
    document.getElementById("console").innerHTML += consoleText.charAt(char++);
    setTimeout(typeWriter, typeSpeed);
  }
}
