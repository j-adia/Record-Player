let state = false;
let record = document.querySelector(".record");
let playButton = document.querySelector(".play-button");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".song");
let slider = document.querySelector(".slider");
const knob = document.querySelector(".knob");

playButton.addEventListener("click", () =>{
    if (state == false) {
        record.classList.add("on");
        toneArm.classList.add("play");
        setTimeout(() => {
            song.play();
        }, 1000);
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        song.pause();
    }
    state = !state;
    console.log(state);
})

slider.addEventListener("input", (e) => {
    song.volume = Number(e.target.value);
});
