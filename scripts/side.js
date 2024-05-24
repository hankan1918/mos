function hamburger(e){
    var side = document.getElementsByTagName('aside')[0];
    var maincolor = "#251852";
    var pointcolor = "#EE5059";
    if(e.classList.contains('closed')){
        for(var i = 0; i<e.children.length; i++){
            e.children[i].classList.add('change');
            e.children[i].style.backgroundColor = maincolor;
        }
        e.classList.remove('closed');

        side.style.display = "block";
        side.classList.add('slide');
    } else {
        for(var i = 0; i<e.children.length; i++){
            e.children[i].classList.remove('change');
            e.children[i].style.backgroundColor = pointcolor;
        }
        e.classList.add('closed');
        
        side.style.display = "none";
        side.classList.remove('slide');

    }
}