// Filename: glossary.js
// Version post beta 3 (7)
// version 05.27.99

window.onload= resizeGloss;
window.onresize= resizeGloss;

function resizeGloss(){

var oButtonMenu= document.all.item("buttonMenu");
var oText= document.all.item("text");

	if (oText ==null) return;
    if (oButtonMenu != null){
	    document.all.text.style.overflow= "auto";
  	    document.all.buttonMenu.style.width= document.body.offsetWidth;
	    document.all.text.style.width= document.body.offsetWidth-3;
	    document.all.text.style.top= document.all.buttonMenu.offsetHeight;
	    if (document.body.offsetHeight > document.all.buttonMenu.offsetHeight)
    	    document.all.text.style.height= document.body.offsetHeight - document.all.buttonMenu.offsetHeight; 
	    else document.all.text.style.height= "auto";	
	}	
}

function buttonMouseover(){
var e= window.event.srcElement;

    if (e.className.toLowerCase()=="button") e.className= "buttonDown";
	if (e.children.tags('span')(0)=="button") e.children.tags('span')(0).className= "buttonDown";

    if (e.className.toLowerCase()=="buttonDown") e.className= "button";
	if (e.children.tags('span')(0)=="buttonDown") e.children.tags('span')(0).className= "button";
}

function HideIt (value) 
  {
  var e = document.getElementById(value);
  var c = "show"+value;
  var txt = document.getElementById(c);
  if (!document.getElementById(value).shown) 
  {
    e.shown = true;
    e.style.display = 'block';
    if (value>99) 
    txt.innerHTML = "Скрыть"
    else
    txt.innerHTML = "скрыть"
  }
  else 
  {
    e.shown = false;
    e.style.display = 'none';
    if (value>99) 
    txt.innerHTML = "Показать"
    else
    txt.innerHTML = "показать"
  }
} // .function HideIt

function hidepic(value)
{
	var e = document.getElementById(value);
	 if (!document.getElementById(value).shown) 
  {
    e.shown = true;
    e.style.display = 'block';
  }
  else 
  {
    e.shown = false;
    e.style.display = 'none';
  }
}
