function oblicz(){
    var dys=document.getElementById("dystans").value;
    var szyb=document.getElementById("szybkosc").value;
    var grand=document.getElementById("grand").checked;
    var mlode=document.getElementById("mlode").checked;
    if (grand==true && mlode==false && (szyb==300 || szyb==325) ){
        document.getElementById("wynik").innerHTML="In Grand Prix pace must be from 375 to 400 m/min or 350 m/min in indoor competitions and competitions held in an open arena measuring 65 m x 85 m or less."
        document.getElementById("szybkosc").classList.add('error');
    }
    else if(mlode==true && szyb != 325){
        document.getElementById("wynik").innerHTML="In competition for young horses pace must be 325 m/min";
        document.getElementById("szybkosc").classList.add('error');
    }
    else{
        document.getElementById("wynik").innerHTML="Time allowed must be  "+Math.round(dys/szyb*60);
        document.getElementById("szybkosc").classList.remove('error');
        document.getElementById("szybkosc").classList.add('good');
    }
}