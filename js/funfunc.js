var char = 0;
var consoleText = 'WE DID POOP\nWE DID POOP I TELL YOU';
var typeSpeed = 75;

function typeWriter() {
  if (char < consoleText.length) {
    document.getElementById("console").innerHTML += consoleText.charAt(char++);
    setTimeout(typeWriter, typeSpeed);
  }
}
