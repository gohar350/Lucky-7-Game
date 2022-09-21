function myFunction(){
    var check = document.getElementById("play").value;
    if(check=="Spin"){
        var X=document.getElementById("Re");
        X.innerHTML = "";

        document.getElementById("play").value="Stop";
       myinterval();
    }
    else if(check=="Stop"){
        document.getElementById("play").value="Spin";
       Stop();
        checker();
    }

}

function myinterval(){
    Spinner=setInterval(changeNo,10);
}
function changeNo(){
    document.getElementById("num1").value=parseInt(Math.floor(Math.random()*8));
    document.getElementById("num2").value=parseInt(Math.floor(Math.random()*8));
    document.getElementById("num3").value=parseInt(Math.floor(Math.random()*8));
}

function Stop(){
    clearInterval(Spinner);
}

function checker(){
    var A = document.getElementById("num1").value;
    var B = document.getElementById("num2").value;
    var C = document.getElementById("num3").value;
    if(A=='7' && B=='7' && C=='7'){
        Win();
    }
    else{
        
        lose();
    }

}
function lose(){
    var X=document.getElementById("Re");
    X.innerHTML = "<div class='vid'> <video width='720' height='300' autoplay> <source src='./loss.mp4' type='video/mp4'> </video></div>";

}

function Win(){
    var X=document.getElementById("Re");
    X.innerHTML = "<div class='vid'> <video width='720' height='300' autoplay> <source src='./win.mp4' type='video/mp4'> </video></div>";

}
  