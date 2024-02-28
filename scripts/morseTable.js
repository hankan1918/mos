// Generate MorseTable, Show & Hide

var tableState = false;
const tableButton = document.querySelector(".showMorseTable");
const morseTable = document.createElement("table");

function generateTable(){
    const loop = 5;
    var tr, tdE, tdC;

    for(i = 0; i<26; i++){
        if(i%loop == 0){
            try{
                morseTable.appendChild(tr);
            } catch(e) {

            }
            tr = document.createElement("tr");
        }
        tdE = document.createElement("td");
        tdE.innerText = String.fromCharCode(i+97)
        
        tdC = document.createElement("td");
        tdC.innerText = code[i];


        tr.appendChild(tdE);
        tr.appendChild(tdC);
        // 97 is ascii of a
        // console.log(String.fromCharCode(i+97));

    }
    morseTable.appendChild(tr);

    morseTable.style.border = 'solid';
    morseTable.classList.add("morseTable");
    morseTable.classList.add("hidden");
    morseTable.style.width = 100*loop + "px";
    document.body.appendChild(morseTable);
}

generateTable();

tableButton.addEventListener("click", function(){
    if(tableState){
        morseTable.classList.add("hidden");
        tableState = false;
    }
    else{
        morseTable.classList.remove("hidden");
        tableState = true;
    }
})