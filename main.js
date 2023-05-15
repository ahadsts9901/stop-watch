let startTime;
let time;

function start() {
    startTime = Date.now();
    time = setInterval(updatedTime, 10);
    document.getElementById("result").innerHTML = time;
    // console.log(time);
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(time);
    let stopTime = (Date.now() - startTime) / 1000;
    document.getElementById("result").innerHTML = stopTime.toFixed(2);
    // console.log("Elapsed time: " + stopTime.toFixed(2) + " seconds");
    document.getElementById("start").disabled = false;
}

function updatedTime() {
    let stopTime = (Date.now() - startTime) / 1000;
    document.getElementById("result").innerHTML = stopTime.toFixed(2);
    // console.log(stopTime.toFixed(2));
}