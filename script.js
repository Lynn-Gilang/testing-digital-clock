function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = document.getElementById("session");
  
    if(h >= 12){
        session.innerHTML='PM';
    }else{
        session.innerHTML='AM';
    }
    if(h>12){
        h = h - 12;
    }
    document.getElementById("hours").innerHTML=h;
    document.getElementById("miniutes").innerHTML=m;
    document.getElementById("seconds").innerHTML=s;
}
setInterval(startTime,10)