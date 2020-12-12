let message = "If it is possible, keep your browser's zoom level at 100%. It will help the website look better.";
//alert(message);

// A function, called when we want to change the theme to DARK.

function themeChangerDark(){
   document.body.style.backgroundColor = "black";
   document.body.style.color = "white";
   document.getElementById("themeChangerDark").style.display = "none";
   document.getElementById("themeChangerLight").style.display = "inline";
   document.getElementById("sketchSettings").style.border = "2px solid white";
   document.getElementById("pxAmount").style.backgroundColor = "white";
   document.getElementById("inputCustomValue").style.backgroundColor = "white";
   document.getElementById("inputCustomValue").style.border = "2px solid black";
}

// A function, called when we want to change the theme to LIGHT.

function themeChangerLight(){
    document.body.style.backgroundColor = "lightyellow";
    document.body.style.color = "black";
    document.getElementById("themeChangerLight").style.display = "none";
    document.getElementById("themeChangerDark").style.display = "inline";
    document.getElementById("sketchSettings").style.border = "2px solid black";
    document.getElementById("pxAmount").style.backgroundColor = "lightyellow";
    document.getElementById("inputCustomValue").style.backgroundColor = "lightyellow";
    document.getElementById("inputCustomValue").style.border = "2px solid black";
}