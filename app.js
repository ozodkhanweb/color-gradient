const body = document.querySelector("body");
const container = document.querySelector(".container");
const text = document.querySelector(".text");

container.addEventListener("click", setGradient);

const valeus = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomColor = Math.trunc(Math.random() * valeus.length);
    color += valeus[randomColor];
  }

  return color;
}

// const color3 = getGradient();

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`;
  body.style.background = bgColor;
  text.textContent = bgColor;
}

setGradient();
