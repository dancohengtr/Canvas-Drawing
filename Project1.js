/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/
//creates stroked and filled rectangle
window.onload = function() {
  var c=document.getElementById("cartoonCanvas");
  var ctx=c.getContext("2d");
  
  //write message
  ctx.fillText("Bork Bork!",100,50);
  
  //draw ground
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(0, 135, 500, 50);

  //draw left side of grass with strokes
  ctx.fillStyle = "#347705";
  ctx.fillRect(0, 135, 100, 50);
  ctx.lineWidth  = 0.8;
  ctx.strokeRect(0, 135, 100, 50);

  //draw right side of grass with strokes
  ctx.fillStyle = "#347705";
  ctx.fillRect(200, 135, 100, 50);
  ctx.lineWidth  = 0.8;
  ctx.strokeRect(200, 135, 100, 50);

  //draw the sun with stroke
  ctx.beginPath();
  ctx.arc(16,20,15,0,2*Math.PI);
  ctx.fillStyle = "#FFFF00";
  ctx.fill();
  ctx.stroke();
  
  //draw top set of clouds
  for(var i = 30; i < 300; i += 30){
    var img = document.getElementById('cloud');
    ctx.drawImage(img,i,5,25,15);
  }
  
  //draw bottom set of clouds
  for(var j = 10; j < 300; j += 30){
      var img = document.getElementById('cloud');
      ctx.drawImage(img,j,20,25,15);
  }
  
  //draw picket fence
  for(var x = 0; x < 300; x += 45){
    var img = document.getElementById('fence');
    ctx.drawImage(img,x,120,50,15);
  }
  
  //draw base of house
  ctx.fillStyle = "#FFFF00";
  ctx.fillRect(115, 95, 70, 40);
  ctx.lineWidth  = 0.8;
  ctx.strokeRect(115, 95, 70, 40);
  
  //draw triangular roof of house
  ctx.beginPath();
  ctx.moveTo(110, 95);
  ctx.lineTo(190, 95);
  ctx.lineTo(150, 60);
  ctx.closePath();
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.fillStyle = "#990000";
  ctx.fill();
  
  //draw trees
  var img = document.getElementById('tree');
  ctx.drawImage(img,0,90,50,50);
  ctx.drawImage(img,50,90,50,50);
  ctx.drawImage(img,200,90,50,50);
  ctx.drawImage(img,250,90,50,50);
  
  //draw door
  ctx.fillStyle = "#6d4318";
  ctx.fillRect(145, 115, 10, 20);
  ctx.strokeRect(145, 115, 10, 20);
  
  
  //draw first window
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(125, 110, 10, 15);
  ctx.strokeStyle = "#990000";
  ctx.strokeRect(125, 110, 10, 15);
  //draw vertical line in window
  ctx.beginPath();
  ctx.moveTo(130, 110);
  ctx.lineTo(130, 125);
  ctx.closePath();
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.fillStyle = "#990000";
  ctx.fill();
  //draw horizontal line in window
  ctx.beginPath();
  ctx.moveTo(125, 118);
  ctx.lineTo(135, 118);
  ctx.closePath();
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.fillStyle = "#990000";
  ctx.fill();
  
  
  //draw second window
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(165, 110, 10, 15);
  ctx.strokeStyle = "#990000";
  ctx.strokeRect(165, 110, 10, 15);
  //draw vertical line in window
  ctx.beginPath();
  ctx.moveTo(170, 110);
  ctx.lineTo(170, 125);
  ctx.closePath();
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.fillStyle = "#990000";
  ctx.fill();
  //draw horizontal line in window
  ctx.beginPath();
  ctx.moveTo(165, 118);
  ctx.lineTo(175, 118);
  ctx.closePath();
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.fillStyle = "#990000";
  ctx.fill();
  
  //draw the doggo
  var img = document.getElementById('doggo');
  ctx.rotate(0.6);
  ctx.drawImage(img,165,-55,30,30);
};

  



