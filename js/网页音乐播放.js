var bgmusic=document.getElementById("bg-music");
var musicToggle=document.getElementById("music-Toggle");

musicToggle.addEventListener("click",function(){
    if (bgmusic.paused){
        bgmusic.onplay();
        musicToggle.textContent="暂停播放";
    }else{
        bgmusic.pause();
        musicToggle.textContent="播放音乐";
    }
});