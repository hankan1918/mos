const left = document.querySelector(".client");
const right = document.querySelector(".provide");

window.onresize = function(event){
    // console.log(left.clientWidth);
    right.style.height = left.clientHeight;
    right.style.width = left.clientWi;

};