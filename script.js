const hour = document.querySelector(".hour-hand");
const minute = document.querySelector(".minute-hand");
const second = document.querySelector(".second-hand");
function rotateHand(hand, degree) {
  hand.style.transform = `translate(-50%, -100%) rotate(${degree}deg)`;
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegree = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegree = minutes * 6;
  const secondDegree = seconds * 6;

  rotateHand(hour, hourDegree);
  rotateHand(minute, minuteDegree);
  rotateHand(second, secondDegree);
}

setInterval(updateClock, 1000);

updateClock();
