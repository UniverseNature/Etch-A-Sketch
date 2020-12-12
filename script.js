let message = "If it is possible, keep your browser's zoom level at 100%. It will help the website look better.";
//alert(message);

function themeChangerDark(){
   document.body.style.backgroundColor = "black";
   document.body.style.color = "white";
   document.getElementById("themeChangerDark").style.display = "none";
   document.getElementById("themeChangerLight").style.display = "inline";
}

function themeChangerLight(){
    document.body.style.backgroundColor = "lightyellow";
    document.body.style.color = "black";
    document.getElementById("themeChangerLight").style.display = "none";
    document.getElementById("themeChangerDark").style.display = "inline";
}