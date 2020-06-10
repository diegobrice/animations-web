const pelota = document.getElementById("pelota");

// console.log(pelota);

const animation = pelota.animate(
  [{ transform: "translateX(0)" }, { transform: "translateX(400px)" }],
  {
    duration: 1000,
    // delay: 2000,
    direction: "alternate",
    easing: "linear",
    iterations: Infinity,
    fill: "forwards",
    // iterationStart: 0.5,
    endDelay: 1000,
  }
);

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const reverse = document.getElementById("reverse");

console.log(animation);

play.addEventListener("click", () => {
  animation.play();
});
pause.addEventListener("click", () => {
  animation.pause();
});
stop.addEventListener("click", () => {
  animation.cancel();
});
reverse.addEventListener("click", () => {
  animation.reverse();
});
