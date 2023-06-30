function getTimeDiff() {
  const countdownTo = new Date("2024/01/01").getTime();
  const currentTime = new Date().getTime();

  let diff = countdownTo - currentTime;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const topNum = document.querySelector(".top-seconds");
  const topSecNum = document.querySelector(".top-sec-next");
  const bottomNum = document.querySelector(".bottom-seconds");
  const bottomSecNum = document.querySelector(".bottom-sec-next");

  const topMin = document.querySelector(".top-minutes");
  const topMinNum = document.querySelector(".top-min-next");
  const bottomMin = document.querySelector(".bottom-minutes");
  const bottomMinNum = document.querySelector(".bottom-min-next");

  const tophours = document.querySelector(".top-hours");
  const tophoursNum = document.querySelector(".top-hours-next");
  const bottomhours = document.querySelector(".bottom-hours");
  const bottomhoursNum = document.querySelector(".bottom-hours-next");

  const topDays = document.querySelector(".top-days");
  const topDaysNum = document.querySelector(".top-days-next");
  const bottomDays = document.querySelector(".bottom-days");
  const bottomDaysNum = document.querySelector(".bottom-days-next");

  topNum.classList.toggle("top-animate");
  bottomNum.classList.toggle("bottom-animate");

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `0${hours}` : hours;
  days = days < 10 ? `0${days}` : days;

  if (seconds === "00") {
    setTimeout(() => {
      topMin.classList.add("top-animate");
      bottomMin.classList.add("bottom-animate");
    }, 1000);
  } else if (seconds === 30) {
    topMin.classList.remove("top-animate");
    bottomMin.classList.remove("bottom-animate");
  }
  if (minutes === "59") {
    setTimeout(() => {
      tophours.classList.add("top-animate");
      bottomhours.classList.add("bottom-animate");
    }, 1000);
  } else if (minutes === 30) {
    tophours.classList.remove("top-animate");
    bottomhours.classList.remove("bottom-animate");
  }
  if (hours === "00") {
    setTimeout(() => {
      topDays.classList.add("top-animate");
      bottomDays.classList.add("bottom-animate");
    }, 1000);
  } else if (minutes === 30) {
    topDays.classList.remove("top-animate");
    bottomDays.classList.remove("bottom-animate");
  }

  topNum.innerText = seconds;
  bottomNum.innerText = seconds;
  topSecNum.innerText = seconds;
  bottomSecNum.innerText = seconds;

  topMin.innerText = minutes;
  bottomMin.innerText = minutes;
  topMinNum.innerText = minutes;
  bottomMinNum.innerText = minutes;

  tophours.innerText = hours;
  bottomhours.innerText = hours;
  tophoursNum.innerText = hours;
  bottomhoursNum.innerText = hours;

  topDays.innerText = days;
  bottomDays.innerText = days;
  topDaysNum.innerText = days;
  bottomDaysNum.innerText = days;
}

setInterval(() => {
  getTimeDiff();
}, 500);
