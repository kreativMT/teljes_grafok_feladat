function ellenoriz(){

    if (document.getElementById("c").checked == true){
        valasz.innerText = "jó válasz";
    }
    else if(document.getElementById("a").checked == true || document.getElementById("b").checked == true || document.getElementById("d").checked == true){
        valasz.innerText = "Nem jó a válasz";
    }
    else {
        valasz.innerText = "Kérlek adj meg egy választ";
    }
}

