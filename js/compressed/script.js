function whl(n){var e;n%=1535;var i="rgb(",t=n%256;return i=n>=0&&256>n?i+"0,255,"+t+")":n>255&&512>n?i+"0,"+(255-t)+",255)":n>511&&768>n?i+t+",0,255)":n>767&&1024>n?i+"255,0,"+(255-t)+")":n>1023&&1280>n?i+"255,"+t+",0)":i+"0,"+(255-t)+",255)"}function onMouseMove(n){"-1"!==$("#myCanvas").css("z-index")&&$("#myCanvas").css("z-index","-1"),pt=[n%window.outerWidth,ctr.y],stopLocation=.5+.5*Math.sin(n.count/100),percentString=stopLocation.toString(),count+=speed,background.fillColor={gradient:{stops:[[whl(count),"0"],[whl(count+difference),percentString],[whl(count+difference),"1"]]},origin:[-50,screen.availHeight/2],destination:[screen.availWidth+150,screen.availHeight/2]}}if(window.innerWidth>480){var ctr=new paper.Point(2*window.innerWidth,2*window.innerHeight),bounds=new paper.Point(2*window.innerWidth,window.innerHeight),spex={x:Math.floor(40*Math.random()),y:Math.floor(40*Math.random()),size:3+15*Math.random()},count=500+Math.floor(200*Math.random()),speed=1,difference=300,background=new paper.Path.Rectangle(paper.view.bounds);background.fillColor={gradient:{stops:[[whl(count),"0"],[whl(count+difference),".5"],[whl(count+difference),"1"]]},origin:[0,Math.random()*screen.availHeight],destination:[screen.availWidth+150,Math.random()*screen.availHeight]},navigator.userAgent.indexOf("iPhone")>0&&$("#myCanvas").remove()}