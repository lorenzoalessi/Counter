function decrease(){
    var count = document.getElementById("counter").textContent;
    count--;
    if(count == 0){
        document.getElementById("counter").style.color = "black";
    }else if(count < 0){
        document.getElementById("counter").style.color = "red";
    }
    document.getElementById("counter").textContent = count;
}

function reset(){
    document.getElementById("counter").style.color = "black";
    document.getElementById("counter").textContent = 0;
}

function increase(){
    var count = document.getElementById("counter").textContent;
    count++;
    if(count == 0){
        document.getElementById("counter").style.color = "black";
    }else if(count > 0){
        document.getElementById("counter").style.color = "green";
    }
    document.getElementById("counter").textContent = count;
}