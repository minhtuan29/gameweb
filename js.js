let myAudio = new Audio('/mp3/crazycake.mp3');
let isOnAudio = false;
document.getElementById("btnAudio").onclick = () => {
    isOnAudio = !isOnAudio;
    if (isOnAudio) {
        myAudio.play();
    } else {
        myAudio.pause();
        myAudio.currentTime = 0;
    }
}


let pikachuGif = document.getElementById("pikachuGif");
setTimeout(() => {
    pikachuGif.style.display = "none";
}, 0)

setTimeout(() => {
    pikachuGif.style.display = "block";
}, 1000)

setTimeout(() => {
    pikachuGif.style.display = "none";
}, 2800)




new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    dots: "#dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
});



let buttonDots = document.getElementById("dots").children;
let count = 0;

setInterval(() => {
    count = (count + 1) % buttonDots.length;
    buttonDots[count].click();
}, 4000)

