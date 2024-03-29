// ========= chỉnh size về dạng chứa content vừa vặn, sau khi load ảnh =======
setTimeout(() => document.getElementById("sliderImg").style.height = "auto", 1200);
//=====================================




// ============ chơi nhạc =====================
let musicIdx = 0;
let musicArr = [
new Audio("/music/b4_1.mp3"),
new Audio("/music/b5_1.mp3"),
new Audio("/music/b2_1.mp3"),
new Audio("/music/b3_1.mp3"),
new Audio("/music/b1_.mp3")
];

let myAudio = musicArr[musicIdx];
let isOnAudio = false;
document.getElementById("btnAudio").onclick = () => {
    isOnAudio = !isOnAudio;
    if (isOnAudio) {
        if(musicIdx > musicArr.length-1) musicIdx = 0;
        myAudio = musicArr[musicIdx++];
        myAudio.play();
        myAudio.addEventListener("ended", ()=>{
            myAudio.currentTime = 0;
            myAudio.pause();
            
            if(musicIdx >4) musicIdx = 0;
            myAudio = musicArr[musicIdx++];
            myAudio.play();
            isOnAudio = true;
        })
    } else {
        myAudio.pause();
        myAudio.currentTime = 0;
    }
}
//================================================





//=======================================
let pikachuGif = document.getElementById("pikachuGif");
setTimeout(() => {
    pikachuGif.style.display = "block";
}, 1000)

setTimeout(() => {
    pikachuGif.style.display = "none";
}, 2800)
//============================================




//===============  Thông báo đừng copy bản quyền =================================
let copyrightMsg = document.getElementById("copyrightMsg");

setTimeout(() => {
    copyrightMsg.style.display = "block";
}, 3400)

setTimeout(() => {
    copyrightMsg.style.display = "none";
}, 10000)
//==============================================================




//============ tắt slide chữ ============
setTimeout(() => msgSlide.style.display = "none", 20000)





//===============Chạy Slide Ảnh=============================
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

function sliderImgAuto(){
    setInterval(() => {
        count = (count + 1) % buttonDots.length;
        buttonDots[count].click();
    }, 6500)
}

setTimeout(sliderImgAuto, 3500)
//====================================================










// ==========Chức năng session cho youtube==============
let youtube = document.getElementById("youtube");
let msgSlide = document.getElementById("msgSlide");
youtube.onclick = () => {
    sessionStorage.setItem("visitedYoutube", true);
    msgSlide.innerText = "Thanks for visiting my Youtube channel. You are a vip member now <3";
}

if (sessionStorage.getItem("visitedYoutube")) {
    msgSlide.innerText = "Thanks for visiting my Youtube Channel. You are a vip member now <3"
}
//==========================================================











//  =========================== mở game thanh bên =====================
let sliderImg = document.getElementById("sliderImg");

let openGamePikachu = () => {
    sliderImg.innerHTML = '<iframe id="game" src="https://krongkmar.com/pikachu/" scrolling=no allowfullscreen=true style="height:630px;width:1000px; border: none;"></iframe>';
    window.scrollTo(0, 0);
}
let openGameBlood = () => {
    sliderImg.innerHTML = '<iframe style="margin-left:3em" src="https://www.retrogames.cc/embed/41623-bloody-roar-2-bringer-of-new-age.html" width="1000" height="675" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
    window.scrollTo(0, 0);
    setTimeout(()=>{gameTutorialBtn.style.display = "block"}, 1000)
    gameTutorialLink.href = "/gametutorial/bloodyroar.html";
}

let openGameHoxe = () => {
    sliderImg.innerHTML = '<iframe style="margin-left:3em" src="https://www.retrogames.cc/embed/8038-cadillacs-dinosaurs-930201-usa.html" width="900" height="600" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
    window.scrollTo(0, 0);
    setTimeout(()=>{gameTutorialBtn.style.display = "block"}, 1000)
    gameTutorialLink.href = "/gametutorial/hoxe.html";
}

let openMeltalSlug = () => {
    sliderImg.innerHTML = '<iframe style="margin-left:3em" src="https://www.retrogames.cc/embed/9160-metal-slug-3-ngm-2560.html" width="900" height="600" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
    window.scrollTo(0, 0);
    setTimeout(()=>{gameTutorialBtn.style.display = "block"}, 1000)
    gameTutorialLink.href = "/gametutorial/metal3.html";
}

let openRacing = () => {
    sliderImg.innerHTML = '<iframe width="1100" height="700" src="https://www.addictinggames.com/embed/html5-games/25031" scrolling="no"></iframe>';
    window.scrollTo(0, 0);
    setTimeout(()=>{gameTutorialBtn.style.display = "block"}, 1000)
    gameTutorialLink.href = "/gametutorial/racing1.html";
}

let openRPG = () => {
    sliderImg.innerHTML = '<iframe style="width:1100px; height: 690px; border: none;" scrolling=no allowfullscreen=true frameborder=no src="https://www.addictinggames.com/embed/html5-games/25138"></iframe>';
    window.scrollTo(0, 0);
}

let openTowerDefen = () => {
    sliderImg.innerHTML = '<iframe width="1000px" height="650px" src="https://www.addictinggames.com/embed/html5-games/23830" scrolling="no"></iframe>';
    window.scrollTo(0, 0);
}

let nav = document.getElementsByTagName("nav");
let menuItems = nav[0].childNodes;

// 1 3 5 7 9 11 13
menuItems[1].onclick = openGameBlood;
menuItems[3].onclick = openMeltalSlug;
menuItems[5].onclick = openRPG;
menuItems[7].onclick = openTowerDefen;
menuItems[9].onclick = openRacing;
menuItems[11].onclick = openGameHoxe;
menuItems[13].onclick = openGamePikachu;
//==============================================================================================







// ============ chức năng local store - ghé thăm lần đầu ================
let btnSubcribed = document.getElementById("subcribed");

btnSubcribed.onclick = () => {
    localStorage.setItem("subcribed", true);
    btnSubcribed.style.display = "none";
}


if (localStorage.getItem("subcribed") === null) {
    setTimeout(() => btnSubcribed.style.display = "block", 10000);
    setTimeout( openPopup, 11000);
}


//==========================================================================










//================== game mở rộng ===============================

function openGame(iframeStr){
    sliderImg.innerHTML = iframeStr;
    window.scrollTo(0,0);
}


function linkGame(gameIDStr, iframeStr, usageStrDirect){
    document.getElementById(gameIDStr).onclick = ()=>{
        openGame(iframeStr);
        if(usageStrDirect){
            setTimeout(()=>{gameTutorialBtn.style.display = "block"}, 1000)
            gameTutorialLink .href = "/gametutorial/" + usageStrDirect +".html";
        }
    }
}

linkGame("gameFPS1", '<iframe src="https://venge.io" width="1190" height="670" scrolling="none" frameborder="0"></iframe>', 'fps1');
linkGame("gameMetalSlugX", '<iframe style="margin-left:6em" src="https://www.retrogames.cc/embed/9170-metal-slug-x-super-vehicle-001-ngm-2500-ngh-2500.html" width="800" height="600" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>', 'metal3');
linkGame("gameMario", '<iframe style="margin-left:6em" src="https://www.retrogames.cc/embed/42845-super-mario-all-stars-nes.html" width="800" height="600" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>', 'mario');
linkGame('banCa', '<iframe style="margin-left:15em;"  src="https://play.zing.vn/portal?game=ica" frameborder="0" height="815" width="460"></iframe>')

//=================================================================================================











// =========== Nút coi Watch Tutorial Game play ==================

let gameTutorialBtn = document.getElementById("gameTutorialBtn");
let gameTutorialLink = document.getElementById("gameTutorialLink");

gameTutorialLink.onclick = ()=>{
    gameTutorialBtn.style.display = "none";
}

document.getElementById("removeBtnGameTuto").addEventListener("click", ()=>{
    gameTutorialBtn.style.display = "none";
})
//=============================================================================








//=========== Popup thông báo lần đầu tiên đến trang web =================
let popup = document.getElementById('popup');
function closePopup() {
    popup.classList.remove("show");
}
function openPopup() {
    popup.classList.add('show');
}
document.getElementById("removePopupBtn").addEventListener("click", closePopup);
//==================================================







// =============== ReLoad play music -- Not First Load ================
class Sound{
    static audio = new Audio();
    static play(path){
      Sound.audio.src = path;
      Sound.audio.play();
    }
  }

Sound.play("./music/welcome.mp3");
//====================================================================


//================== game ban ca xoay ngang ==============
function showRotateGameBtn(){
    document.getElementById("rotateGameBtn").style.display = "block";
}

function banCaInHorizonOpenFrameX(){
    window.scrollTo(0, 300);
    document.getElementById('sliderImg').innerHTML =  '<iframe style="margin-left:20%;transform: rotate(90deg);"  src="https://play.zing.vn/portal?game=ica" frameborder="0" height="1280" width="720"></iframe>';
};

document.getElementById("banCaHorizonBtn").onclick = ()=>{
    banCaInHorizonOpenFrameX()
}
//============================ firebase auth ================================

import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBEtGWeK1T5SQv4jogwS7lhBpU3QdKylbs",
    authDomain: "minhtuan-2369.firebaseapp.com",
    projectId: "minhtuan-2369",
    storageBucket: "minhtuan-2369.appspot.com",
    messagingSenderId: "263629561617",
    appId: "1:263629561617:web:d1a4cddb887b143983f6b0"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
let googleAuthProvider = new GoogleAuthProvider();
let loginBtn = document.getElementById("loginBtn");

async function main() {

    let firstContent = loginBtn.innerHTML;

    loginBtn.addEventListener('click', () => {
        if (auth.currentUser) {
            signOut(auth);
        } else {
            signInWithPopup(auth, googleAuthProvider)
        }
    });


    onAuthStateChanged(auth, user => {
        if (user) {
            let hisNameArr = user.displayName.split(" ").filter(word => { return word.length < 10 });
            if (hisNameArr.length > 1 && (hisNameArr[0] + hisNameArr[1]).length < 14) {
                loginBtn.innerHTML = `<img src="${user.photoURL}" style='height:30px; border-radius:20px'> <span style="position:relative; bottom:9px">${hisNameArr[0]} ${hisNameArr[1]} Log Out</span>`;
            } else {
                loginBtn.textContent = `<img src="${user.photoURL}" style='height:30px; border-radius:20px'> <span style="position:relative; bottom:9px">${hisNameArr[0]} Log Out</span`;
            }
        } else {
            loginBtn.innerHTML= firstContent;
        }
    });

}


main();

















