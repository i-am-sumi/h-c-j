let input = document.querySelector(".timerFisplay");
let btn = document.querySelector(".buttons");
let stop = document.querySelector("#stop");
let start = document.querySelector("#start");
let restart = document.querySelector("#restart");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;
start.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
stop.addEventListener("click", function () {
  clearInterval(timerId);
});
restart.addEventListener("click", function () {
  clearInterval(timerId);
  input.innerHTML = `00:00:00`;
  msec = secs = mins = 0;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  input.innerHTML = `${minsString}:${secsString}:${msecString}`;
}
