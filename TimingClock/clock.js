function startTimer() {
    var inc = 1000;
    var timer = setInterval(timingFunction, 1000);
    const c = setInterval(clock, inc);
    setTimeout(timer, 3000);
    setTimeout(c, 3000);
    clock();
}

function timingFunction() {
  var date = new Date();
  document.getElementById("time").innerHTML = "Time: " + date.toLocaleTimeString();
}

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}


