
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.transition = "opacity 0.5s linear 0s";
    document.getElementById("box").style.opacity = 0;
    

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.transition = "opacity 0s linear 0s";
    document.getElementById("box").style.opacity = 1;
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";

});

