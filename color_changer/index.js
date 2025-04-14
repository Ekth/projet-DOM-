document.addEventListener("DOMContentLoaded",function(){
let colorbox = document.getElementById("color-box");
let changecolorbnt = document.getElementById("change-color-btn");

function colorRandom(){
    const hexa = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i < 6; i++){
       color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
}
changecolorbnt.addEventListener("click",function(){
    colorbox.style.backgroundColor = colorRandom();
});
});
