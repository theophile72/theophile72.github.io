//Function
function onClickWindow(){
	document.getElementById("icone1").src = 'electron.png';
    document.getElementById("icone1").style.transform ="scale(1)";

    document.getElementById("icone2").src = 'electron.png';
    document.getElementById("icone2").style.transform ="scale(1)";

    document.getElementById("icone3").src = 'electron.png';
    document.getElementById("icone3").style.transform ="scale(1)"
}

function onMouseOverIcone1() {
	document.getElementById("icone1").src = 'icone1.png';
	document.getElementById("icone1").style.transform ="scale(2.3)";
}

function onMouseOverIcone2() {
	document.getElementById("icone2").src = 'icone2.png';
	document.getElementById("icone2").style.transform ="scale(2.3)";
}

function onMouseOverIcone3() {
	document.getElementById("icone3").src = 'icone3.png';
	document.getElementById("icone3").style.transform ="scale(2.3)";
}


// Main
document.getElementById('icone1').addEventListener('mouseover', function() {
	onMouseOverIcone1();
});

document.getElementById('icone2').addEventListener('mouseover', function() {
	onMouseOverIcone2();
});

document.getElementById('icone3').addEventListener('mouseover', function() {
	onMouseOverIcone3();
});
	
window.addEventListener("click", function(){
	onClickWindow();
})