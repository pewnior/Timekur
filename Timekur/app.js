function oblicz(){
    var dys=document.getElementById("dystans").value;
    var szyb=document.getElementById("szybkosc").value;
    var grand=document.getElementById("grand").checked;
    var mlode=document.getElementById("mlode").checked;
    if (grand==true && mlode==false && (szyb==300 || szyb==325) ){
        document.getElementById("wynik").innerHTML="W konkursach Grand Prix szybkość może wynosić od 375 do 400 m/min lub 350 m/min w konkursach halowych i konkursach rozgrywanych na arenie otwartej o wymiarach 65 m x 85 m lub mniejszych. "
        document.getElementById("szybkosc").classList.add('error');
    }
    else if(mlode==true && szyb!=325){
        document.getElementById("wynik").innerHTML="W konkurach dla młodych koni szybkość powinna wynosić 325 m/min";
        document.getElementById("szybkosc").classList.add('error');
    }
    else{
        document.getElementById("szybkosc").classList.remove('error');
        document.getElementById("szybkosc").classList.add('good');
        document.getElementById("wynik").innerHTML="Norma czasu powinna wynosić "+Math.round(dys/szyb*60);
    }
}