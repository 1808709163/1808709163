window.onload = function(){
	// document.getElementById('background').style.height = innerHeight-100+"px";
	document.getElementsByClassName('background-1')[0].style.width = window.innerWidth+"px";
	document.getElementsByClassName('ko')[0].style.width = document.getElementsByClassName('background-1')[0].style.width.split("px")[0]*0.9+"px"; 
}
function kai(){
	document.getElementsByClassName('ko')[0].style.clipPath = "polygon(50% 0,0 100%, 100% 100%)";
	document.getElementsByClassName('feng')[0].style.top = "-309px";
	document.getElementsByClassName('ko')[0].style.backgroundColor = "#55f";
	document.getElementsByClassName('feng')[0].style.filter = "none";
	document.getElementsByClassName('xing_feng')[0].style.boxShadow  = "0px -5px 5px 1px rgba(0,0,0,0.5)";
	document.getElementsByClassName("gai_zhang")[0].style.display = "none";
	document.getElementsByClassName("feng_mian")[0].style.display = "none";
	document.getElementsByClassName("xing_jian")[0].style.display = "block";
	
}