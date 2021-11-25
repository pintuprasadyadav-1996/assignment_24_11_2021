function watch(){
    let time = document.getElementById("per");
    let currenttime = new Date;
    time.innerHTML = currenttime.toLocaleTimeString();
}
setInterval(watch,1000);