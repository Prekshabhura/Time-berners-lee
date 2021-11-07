
canvas = document.getElementById("myCanvas"); //reference variable var x=/////
ctx= canvas.getContext("2d");

color = "red"; 
ctx.beginPath();                 
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 30 ,0 , 2*Math.PI);
ctx.stroke();




canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //addition activity ends
    
     mouse_x = e.clientX -canvas.offsetLeft;
     mouse_y = e.clientY -canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);     //function
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 30 ,0 , 2*Math.PI);
ctx.stroke();
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
