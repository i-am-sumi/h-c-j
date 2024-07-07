let input = document.querySelector(".timerFisplay");
let Btn = document.querySelector(".buttons");
let redBtn = document.querySelector("#stop");
let greenBtn = document.querySelector("#start");
let blueBtn = document.querySelector("#restart");

let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;
greenBtn.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
redBtn.addEventListener("click", () => {
  clearInterval(timerId);
});
blueBtn.addEventListener("click", () => {
  clearInterval(timerId);
  input.innerHTML = `00:00:00`;
  msec = sec = min = 0;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = sec < 10 ? `0${sec}` : sec;
  let minsString = min < 10 ? `0${min}` : min;

  input.innerHTML = `${minsString}:${secsString}:${msecString}`;
}
