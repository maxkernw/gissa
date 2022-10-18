const main = document.querySelector("main");

const audioContext = new AudioContext();

const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);

oscillator.type = "sawtooth";

const input = main.querySelector("input");

input.onkeydown = (event) => {
  if (event.key === "Enter") {
    input.value = "";
    splashText();
    let utterance = new SpeechSynthesisUtterance("Du har fel, haha!");
    speechSynthesis.speak(utterance);
  }
};

const play = (delay, pitch, duration) => {
  var startTime = audioContext.currentTime + delay;
  var endTime = startTime + duration;
  var oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);

  oscillator.type = "sawtooth";
  oscillator.detune.value = pitch * 100;

  oscillator.start(startTime);
  oscillator.stop(endTime);
};
const splashText = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "FEL!! HAHA";
  h1.classList.add("splashText");
  document.body.appendChild(h1);

  setTimeout(() => {
    document.body.removeChild(h1);
  }, 2000);
};
