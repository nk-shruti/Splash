var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
 context.shadowBlur = 0;
context.shadowColor="black";

context.lineJoin = context.lineCap = 'round';
var radius = 10;
var co = "black";
function change(color)
{
	
	 co = color;
	//alert(co);
	 
	context.strokeStyle=color;
	context.fillStyle=color;
	
	context.shadowColor = color;

	
	
	
}

//alert(co+'hi');
var dragging = false;
var x = window.innerWidth;
var y = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineWidth=radius*2;


function fillit()
{   
	context.rect(0,0,x,y);
context.fillStyle=co;
//alert(co);
context.fill();

context.beginPath();
//context.moveTo(e.clientX,e.clientY);
}

function shadowit()
{

 context.shadowBlur = 15;
 document.getElementById('pretty').style.color='white';
 document.getElementById('pretty').style.background='grey';
 
  //context.shadowColor = co;
//alert(co);  
}

/*var a,c,d;
var b;


function drawline(e)
{	
	canvas.addEventListener('mousedown',first);
	canvas.addEventListener('mousedown',second);
	function first(){
	a=e.clientX;
	b=e.clientY;
	}
	function second()
	{
	c=e.clientX;
	d=e.clientY;
	}
	lineit(a,b,c,d);
}

function lineit(a,b,c,d)
{
	  context.beginPath();
      context.moveTo(a,b);
      context.lineTo(c,d);
	  context.strokeStyle=c;
      context.stroke();	
}
*/





function drawline()
{
	var x1,y1,ls;
	
	canvas.addEventListener('mousedown',getit);
	canvas.addEventListener('mousemove',checkit);
	canvas.addEventListener('mouseup',finishit);
	function getit()
	{
			x1=e.clientX;
			y1=e.clientY;
			ls = true;
	}
	function checkit()
	{
		if(!ls)
			return;
		context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(e.clientX,   e.clientY);
      context.stroke();
      context.closePath();
	}
	function finishit()
	{
		if(ls)
		{
			checkit();
			ls=false;
		}
		
	}
}



function clearit()
{
	
	context.clearRect(0,0,x,y);
	
}

function unshadowit()
{
	context.shadowBlur = 0;
  context.shadowColor = '';
  document.getElementById('pretty').style.color='white';
  document.getElementById('pretty').style.background='black';
} 
var putPoint = function(e) {
if(dragging)
{// context.lineJoin = ctx.lineCap = 'round';
 
context.lineTo(e.clientX,e.clientY);
context.stroke();
context.beginPath();
context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
context.fill();
context.beginPath();
context.moveTo(e.clientX, e.clientY);
}
}
var doit = function(e) {
dragging = true;
putPoint(e);
}
var dontdoit = function() {
dragging = false;
context.beginPath();

}
canvas.addEventListener('mousedown',doit); 
canvas.addEventListener('mouseup',dontdoit); 
canvas.addEventListener('mousemove',putPoint); 
subtract.addEventListener('mousedown',ad);
add.addEventListener('mousedown',sub);

function ad()
{

if(radius==50)
	radius = 50;
else radius ++;
document.getElementById("val").innerHTML=radius;
set();
}
function sub()
{
	if(radius==1)
		radius=1;
	else
radius--;
document.getElementById("val").innerHTML=radius;
set();
}
function set()
{
context.lineWidth=radius*2;
canvas.addEventListener('mousedown',doit); 
canvas.addEventListener('mouseup',dontdoit); 
canvas.addEventListener('mousemove',putPoint); 
}

