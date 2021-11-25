function watch() {
    var time = document.getElementById("per");
    var currenttime = new Date;
    time.innerHTML = currenttime.toLocaleTimeString();
}
setInterval(watch, 1000);
