const client = document.querySelector(".client");
const input = document.querySelector("#input");
const result = document.querySelector("#result");

const code = [
    "-.",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
];




function translate(){
    event.preventDefault()
    var mos = input.value;
    var splitMos = mos.split(' ');
    console.log(splitMos);
    result.value = '';
    splitMos.forEach(m => {
        
        idx = code.indexOf(m)
        
        if(idx > -1){
            console.log('B');
            result.value = result.value + String.fromCharCode(idx+97);
        }
        if(idx == 96 && (m=="" || m==" ")){
            console.log('A');
            result.value = result.value + m;
        }
    });
    if(result.value == '')
    alert("모스부호를 입력하세요");
}

function checkReturn(){
    if(event.keyCode == '13'){
        translate();
    }
}
client.addEventListener('submit', translate);