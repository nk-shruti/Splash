 //var head=document.getElementById('head');
// head.addEventListener('mouseover',hide);
 //head.addEventListener('mouseout',show);
 function hide()
{
       document.getElementById('sp').innerHTML="":
       document.getElementById('lo').innerHTML="Splash Now!";
       document.getElementById('li').innerHTML="See other Splashes!";

}
 function show()
{
       document.getElementById('sp').innerHTML="Splash":
       document.getElementById('lo').innerHTML="";
       document.getElementById('li').innerHTML="";

}
function goaway()
{
	
	 document.getElementById('menu').style.background="red";
	
}