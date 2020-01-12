var char = 0;
var consoleText = 'This is a test sentence\nThis is a second test sentence';
var typeSpeed = 100;
var loadSymbols = ['/','-','\\','|']
var loadSymCnt = 0

function typeWriter() {
  if (char < consoleText.length) {
    document.getElementById("console").innerHTML += consoleText.charAt(char++);
    setTimeout(typeWriter, typeSpeed);
  }
}

function loadAnimation() {
  document.getElementById("loading").innerHTML = loadSymbols[loadSymCnt++];
	loadSymCnt = loadSymCnt % 4;
  setTimeout(loadAnimation, typeSpeed);
}
