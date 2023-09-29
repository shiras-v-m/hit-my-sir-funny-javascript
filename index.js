
let x = document.getElementById("myAudio");
let punch = document.getElementById("punchSoundId")
let laugh = document.getElementById("laughSoundId")
let bandAidLeft=document.getElementById("bandAidLeftId")
let bandAidRight=document.getElementById("bandAidRightId")

window.onload = function() {
        playLaugh()
        bandAidLeft.style.display='none'
        bandAidRight.style.display='none'
}


function imageClicked() {
    bandAidLeft.style.display='block'
    bandAidRight.style.display='block'
    bandAidLeft.style.width='20px'
    bandAidLeft.style.height='60px'
    bandAidRight.style.width='20px'
    bandAidRight.style.height='60px'
    playPunchSound()
    x.currentTime = 0;
    punch.currentTime = 0;
    playAudio()
    containerId.style.backgroundImage = "url('./assets/after.png')"

}
function mouseReleased() {
    bandAidLeft.style.width='30px'
    bandAidLeft.style.height='70px'
    bandAidRight.style.width='30px'
    bandAidRight.style.height='70px'
    containerId.style.backgroundImage = "url('./assets/before.png')"
    
}


function playAudio() {
    x.play();
}


function stopAudio() {
    console.log("stop pressed");
    x.pause();
}

function playPunchSound() {
    punch.play()
}
function stopPushSound() {
    console.log("ounch stop pressed");
    punch.pause();
}

function playLaugh(){
    // laugh.currentTime = 0;
    laugh.play()
}
function stopLaugh(){
    laugh.pause();
}