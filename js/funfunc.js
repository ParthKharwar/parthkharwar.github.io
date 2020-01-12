var consoleArea = document.getElementById("console");
var consoleFixed = ['C:\\Personal_Website> ', 'C:\\Personal_Website> ', 'C:\\Personal_Website> ', 'C:\\Personal_Website> ', '\n\nERROR! \nExited with Code 420\nError Message: LOL Nope']
var consoleText = ['git add .', 'git status', 'git commit -m "feat: personal website"', 'git push origin HEAD']
var line = -1;
var char, status;
var typeSpeed = 100;
var loadSymbols = ['/','-','\\','|']
var loadSymCnt = 0

var gitStatus = ["On branch master\n", "Your branch is up to date with 'origin/master'.\n\n", "Changes to be committed:\n", "  (use \"git restore --staged <file>...\" to unstage)\n", "        new file:   css/styles.css\n", "        new file:   index.html\n", "        new file:   js/funfunc.js\n\n"];

function consoleType() {
	consoleArea.innerHTML += '<br>';
	if(line == 1) printStatus();
	consoleArea.innerHTML += consoleFixed[++line];
	for(char = 0; char < consoleText[line].length; char++) {
		(function (char) {
			setTimeout(function() {
				consoleArea.innerHTML += consoleText[line].charAt(char);
			}, typeSpeed * char + 5);
		})(char);
	}
	setTimeout(consoleType, typeSpeed * consoleText[line].length + 10);
}

function printStatus() {
	for(status = 0; status < 7; status++)
		consoleArea.innerHTML += gitStatus[status];
}

function loadAnimation() {
  document.getElementById("loading").innerHTML = loadSymbols[loadSymCnt++];
	loadSymCnt = loadSymCnt % 4;
  setTimeout(loadAnimation, typeSpeed);
}
