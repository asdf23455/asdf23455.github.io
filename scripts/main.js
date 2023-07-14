let count = 0;

function changeImage(src) {
    document.querySelector("img").src = "../images/" + src ;
}
 
document.body.onmousedown = function () {
    count += 1;
     document.querySelector("#pop").textContent = count;   
    changeImage("unko_gorilla.png");
    changeImage("s0090_25_0.png");
}
document.body.onmouseup = function () {
    changeImage("gorilla_banana.png");
}