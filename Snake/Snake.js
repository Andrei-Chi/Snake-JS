
var objs=[];
var ids=["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10",
		 "img11","img12","img13","img14","img15","img16","img17","img18","img19","img20",
		 "img21","img22","img23","img24","img25","img26","img27","img28","img29","img30",
		 "img31","img32","img33","img34","img35","img36","img37","img38","img39","img40",
		 "img41","img42","img43","img44","img45","img46","img47","img48","img49","img50",
		 "img51","img52","img53","img54","img55","img56","img57","img58","img59","img60",
		 "img61","img62","img63","img64","img65","img66","img67","img68","img69","img70",
		 "img71","img72","img73","img74","img75","img76","img77","img78","img79","img80",
		 "img81","img82","img83","img84","img85","img86","img87","img88","img89","img90",
		 "img91","img92","img93","img94","img95","img96","img97","img98","img99","img100"];
ok = 1;
var poz=0;

document.addEventListener("keydown", onKeyPressEvent, false);

function init()
{
	
	var i;
	
	for(i=0;i<100;i++)
	{
		objs.push(document.getElementById("img"+i));
	
	
	}
	jucator();
}

function jucator()
{
	poz=67;
	objs[67].src="cap.png";
	objs[68].src="EW.png";
	objs[69].src="EW.png";
	
}


function onKeyPressEvent(e)
{
		    var keynum;

		    if(window.event) { // IE                    
		      keynum = e.keyCode;
		    } else if(e.which){ // Netscape/Firefox/Opera                   
		      keynum = e.which;
		    }

		   // alert(String.fromCharCode(keynum));
		    //alert(keynum);
			// W = 87;
		    // A = 65;
		    // D = 68;
			// S = 83;
			// SPACEBAR = 32;
			switch(keynum) {
			    case 65:
			        if(poz % 10 == 1) {
						tasta = tasta - 1; 
					}else{
						tasta = 8;
					}
			        break;
			    case 68:
			        if(tasta < 8) {
						tasta = tasta + 1; 
					}else{
						tasta = 0 ;
					}
			        break;
				case 87:
					if(tasta!=0 & tasta!=1 & tasta!=2)
					{
						tasta = tasta - 3;
					}
					else
					{
						tasta = tasta + 6;
					}
					break;
				case 83:
					if(tasta!=8 & tasta!=7 & tasta!=6)
					{
						tasta = tasta + 3;
					}
					else
					{
						tasta = tasta - 6;
					}
					break;
				case 32:
					alert("CLICK");//NU STIU DE CE, dar imi executa un ALERT pentru o secunda
					objs[tasta].click();
					break;
			    default:
			        alert("please press A or D");
			        break;
			}

		  	clearElements();
			if(objs[tasta].src.indexOf("Patrat.png",0)!=-1)
		  	{
				objs[tasta].src = "Patrat_rosu.png";
			}
			if(objs[tasta].src.indexOf("X.png",0)!=-1)
		  	{
				objs[tasta].src = "X_rosu.png";
			}
			if(objs[tasta].src.indexOf("0.png",0)!=-1)
		  	{
				objs[tasta].src = "0_rosu.png";
			}

}