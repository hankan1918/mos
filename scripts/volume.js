// Adjust Font Size

const vButton = document.getElementsByClassName("volume");
const up = vButton[1];
const down = vButton[0];
const num = document.getElementById("numPad");

const ta = document.getElementsByTagName("textarea");

var dvolume = 15;
var volume;

function setVolume(){
    num.innerText = String(volume);
    ta[0].style.fontSize = localStorage.getItem("volume") + "px";
    ta[1].style.fontSize = localStorage.getItem("volume") + "px";
}

up.addEventListener("click", function(){
    volume = volume<30 ? volume+1 : volume;
    localStorage.setItem("volume", String(volume));
    setVolume();
})

down.addEventListener("click", function(){
    volume = volume>10 ? volume-1 : volume;
    localStorage.setItem("volume", String(volume));
    setVolume();
})

volume = Number(localStorage.getItem("volume"));

// console.log(volume);

if(volume == 0){
    localStorage.setItem('volume', String(dvolume));
    volume = Number(localStorage.getItem("volume"));
}

setVolume();