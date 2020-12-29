let message = "If it is possible, keep your browser's zoom level at 100%. It will help the website look better.";
//alert(message);

// Declare all the variables we need.

let darkBtn = document.querySelector("#themeChangerDark");
let lightBtn = document.querySelector("#themeChangerLight");
let pxBtn = document.querySelector("#submitCustomValue");
let pxAmt;
let selectElement =  document.querySelector("#pxAmount"); 
let output; 
let clear = document.querySelector("#clearPxAmount");

// A function, called when we want to change the theme to DARK.

function themeChangerDark() {
   document.body.style.backgroundColor = "black";
   document.body.style.color = "white";
   document.getElementById("themeChangerDark").style.display = "none";
   document.getElementById("themeChangerLight").style.display = "inline";
   document.getElementById("sketchSettings").style.border = "1px solid white";
}

// A function, called when we want to change the theme to LIGHT.

function themeChangerLight() {
    document.body.style.backgroundColor = "lightyellow";
    document.body.style.color = "black";
    document.getElementById("themeChangerLight").style.display = "none";
    document.getElementById("themeChangerDark").style.display = "inline";
    document.getElementById("sketchSettings").style.border = "1px solid black";
}

// A function, called when the user submits the amount of pixels.

function divMaker() {
    for (let i = 0; i < output; i++) {
        let container = document.querySelector("#container");
        let div = document.createElement("div");
    
        div.classList = "containerChildren";
        div.style.display = "inline";
        div.style.border = "2px solid skyblue";
        div.style.margin = "1rem";
        div.style.width = "1rem";

        container.appendChild(div);
    }
}

// A function, called when the user presses the button to clear the canvas.

function clearPxAmount(){
    let container = document.querySelector("#container");
    container.innerHTML = "";
}

// Event listeners for changing the theme.

darkBtn.addEventListener("click", () => {
    themeChangerDark()
});

lightBtn.addEventListener("click", () => {
    themeChangerLight()
});

clear.addEventListener("click", () => {
    clearPxAmount();
});

/* If the pixel-amount submit button is clicked, asign the value to a variable and if the value is "custom",
   change the buttons position and make the custom value bar appear. */

pxBtn.addEventListener("click", () => {
    output  = selectElement.value;
    divMaker()

    if (output === "custom") {
        document.getElementById("inputCustomValue").style.display = "inline";
        document.getElementById("submitCustomValue").style.float = "right";
        document.getElementById("submitCustomValue").style.marginRight = "2em";
    } else {
        document.getElementById("inputCustomValue").style.display = "none";
        document.getElementById("submitCustomValue").style.float = "none";
        document.getElementById("submitCustomValue").style.marginRight = "none";
    }
});
