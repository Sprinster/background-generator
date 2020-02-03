var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("rand");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + "," 
	 + color2.value 
	 + ")";
	 css.textContent = body.style.background;
}

function onRandom(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);

    var bgColor = " linear-gradient(to right,"
    				 + "rgb(" + x + "," + y + "," + z + ")"
    				  +", " + "rgb(" + b + "," + a + "," + c + ")"+ " )";
    body.style.background = bgColor;
    css.textContent = "background :" + bgColor;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", onRandom);
