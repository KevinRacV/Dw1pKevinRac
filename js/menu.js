var a = 0;
function switchMenu() {
	if(a==0){
		document.getElementById("menu-lst").classList.remove("hide");
 		document.getElementById("menu-lst").classList.add("hide-off");
 		a = 1;
	}else{
 		document.getElementById("menu-lst").classList.add("hide");
		a = 0;
	}
} 