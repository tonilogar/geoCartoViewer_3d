
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <style>
  #men{
  position:absolute;
  width:auto;
  height:auto;
  display:none;
  padding:24px;
  color:0F0F0F;
  cursor:pointer;
  background:#FFFFFF;
  border:2px solid #F0F0F0;
  filter:alpha(Opacity=80);
  -khtml-opacity:0.8;
  -moz-opacity:0.8;
  opacity:0.8;

  }
  </style>
  <script>
  function track(e){
  cm=document.getElementById("men");
  cm.style.top=!e ? event.clientY : e.clientY;
  cm.style.left=!e ? event.clientX : e.clientX;
  cm.style.display="block";
  return false;
  }
  document.oncontextmenu=track;
  </script>
  </head>
  <body>
  <div id="men" onclick="this.style.display='none'">
  <p>MENU 01</p>
  <p>MENU 02</p>
  <p>MENU 03</p>
  <p>MENU 04</p>
  </div>
  </body>
  </html>   

