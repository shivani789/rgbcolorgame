var numsquares = 6;

var colors = generaterandomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton =  document.querySelector("#reset");
var  easyBtn= document.querySelector("#easyBtn");
var  hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numsquares = 3;

colors = generaterandomcolors(numsquares);
pickedColor = pickcolor();
colorDisplay.textContent = pickedColor;

for (var i =0; i <squares.length ; i++) {
	if(colors[i])
	{
		squares[i].style.background = colors[i];
	}
	else
	{
		squares[i].style.display = "none";
	}

}


	
// messageDisplay.style.color = "FFFFFF";

});

hardBtn.addEventListener("click",function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");

numsquares = 6 ;

colors = generaterandomcolors(numsquares);
pickedColor = pickcolor();
colorDisplay.textContent = pickedColor;

for (var i =0; i <squares.length ; i++) {
	
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	h1.style.background = "#FF4500;"

}
// messageDisplay.style.color = "FFFFFF";
});


resetbutton.addEventListener("click" , function(){
	colors=generaterandomcolors(numsquares);
	pickedColor=pickcolor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}

		h1.style.background = "#FF4500";

		messageDisplay.textContent = "";
		this.textContent = "New colors";

})

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length;i++)
{	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add clicklisteners to squares
	squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
				messageDisplay.textContent="Correct :)";
				changecolors(clickedColor);
				resetbutton.textContent = "Play Again??";
				// messageDisplay.style.color = "000000";
		}
		else
		{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again :)";
		}
	});
}

function changecolors(color)
{
	for(var i=0;i < squares.length;i++)
	{
		squares[i].style.background = color;
	}
	h1.style.background = color;


}

function pickcolor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num)
{
	var arr = []
	for( var i=0; i < num ; i++)
	{
		arr.push(randomcolor());
	}

	return arr;
}
 function randomcolor()
 {
 	var r= Math.floor(Math.random() * 256);
 	var g= Math.floor(Math.random() * 256);
 	var b= Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";

 }
