const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const keys = document.querySelectorAll(".key");

function playNote(freq){

const osc = audioCtx.createOscillator();

const gain = audioCtx.createGain();

osc.type = "sine";

osc.frequency.value = freq;

osc.connect(gain);

gain.connect(audioCtx.destination);

gain.gain.setValueAtTime(0.3, audioCtx.currentTime);

osc.start();

osc.stop(audioCtx.currentTime + 0.5);

}

keys.forEach(key=>{

key.addEventListener("click",()=>{

const freq = parseFloat(key.dataset.note);

playNote(freq);

});

});