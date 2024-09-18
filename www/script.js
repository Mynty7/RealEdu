var language = "en";
// codebase requires reform
function additionalmenu(){
	document.getElementById("inilink2").style.display = "inline-block";
	document.getElementById("inilink1").style.display = "none";
}
function opentab(a){
	var i;
	var x = document.getElementsByClassName("maintabs");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById("eduprompt").style.display = "none";
	document.getElementById(a).style.display = "block";

	document.getElementById("inilink").style.display = "inline-block";
	document.getElementById("frontboard").style.display = "none";
}
function aopentab(a){
	var i;
	var x = document.getElementsByClassName("maintabs");
	for(i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById("eduprompt").style.display = "none";
	document.getElementById(a).style.display = "block";
	document.getElementById("inilink2").style.display = "inline-block";
	document.getElementById("inilink1").style.display = "none";
	if(a == "menu1")
		document.getElementById("descbar").innerHTML="Pure Science";
	if(a == "menu2")
		document.getElementById("descbar").innerHTML="Account";
	if(a == "menu3")
		document.getElementById("descbar").innerHTML="Islamic Studies";
	if(a == "menu4")
		document.getElementById("descbar").innerHTML="Additionals";
}

function testopen(){
	if(localStorage.getItem('openmenu') == 1){
		opentab('menu1')
	}
	if(localStorage.getItem('openmenu') == 2){
		opentab('menu2')
	}
}

// THEMES
function themeSwitch(yPrm, ySec, yFnt, yFsc, yHvr, yBgi, yTheme)
{
	document.body.style.setProperty("--prm", yPrm);
	document.body.style.setProperty("--sec", ySec);
	document.body.style.setProperty("--fnt", yFnt);
	document.body.style.setProperty("--fsc", yFsc);
	document.body.style.setProperty("--hvr", yHvr);
	document.body.style.setProperty("--bgi", yBgi);
	localStorage.setItem("theme", yTheme);
}

function plum(){
	themeSwitch("#e400fd", "#5e17ed", "#ffffff", "#ffffff", "#d4f1f4", "url('./plum.png')", "plum");
}

function pink(){
	themeSwitch("#ffa5b8", "#f52b8f", "#ffffff", "#ffffff", "#333333", "url('./pink.png')", "pink");
}

function gold(){
	themeSwitch("#ca9c16", "#faed33", "#ffffff", "#000000", "#333333", "url('./gold.png')", "gold");
}

function mynt(){
	themeSwitch("#000000", "#00ffc2", "#ffffff", "#000000", "#d4f1f4", "url('./mynt.png')", "mynt");
}

function oldBlue(){
	themeSwitch("#05445E", "#5bb4aa", "#ffffff", null, "#d4f1f4", "url('legacy/old_blue.png')", "oldBlue");
}

function oldGold(){
	themeSwitch("#ca9c16", "#faed33", "#ffffff", null, "#333333", "url('legacy/old_gold.png')", "oldGold");
}

function oldMint(){
	themeSwitch("#000000", "#00ffc2", "#ffffff", null, "#d4f1f4", "url('legacy/old_mint.png')", "oldMint");
}

function oldPink(){
	themeSwitch("#ffa5b8", "#f52b8f", "#ffffff", null, "#333333", "url('legacy/old_pink.png')", "oldPink");
}


switch (localStorage.getItem("theme")) {
	case "plum":
		plum();
		break;

	case "gold":
		gold();
		break;

	case "pink":
		pink();
		break;

	case "mynt":
		mynt();
		break;

	case "oldBlue":
		oldBlue();
		break;

	case "oldGold":
		oldGold();
		break;

	case "oldPink":
		oldPink();
		break;

	case "oldMint":
		oldMint();
		break;

	default:
		plum();
		break;
}
