let startTime;
let time;

function start() {
    startTime = Date.now();
    time = setInterval(updatedTime, 10);
    document.getElementById("result").innerHTML = time;
    // console.log(time);
}

function stop() {
    clearInterval(time);
    let stopTime = (Date.now() - startTime) / 1000;
    document.getElementById("result").innerHTML = stopTime.toFixed(2);
    // console.log("Elapsed time: " + stopTime.toFixed(2) + " seconds");
}

function updatedTime() {
    let stopTime = (Date.now() - startTime) / 1000;
    document.getElementById("result").innerHTML = stopTime.toFixed(2);
    // console.log(stopTime.toFixed(2));
}

function reset() {
    document.getElementById("result").innerHTML = "00";
    // console.log('00);
}