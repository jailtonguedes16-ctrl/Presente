const sky = document.getElementById("sky");

/* ESTRELAS */

for (let i = 0; i < 220; i++) {

  const s = document.createElement("div");

  s.className = "star";

  const size = Math.random() * 2.5 + 0.5;

  s.style.cssText = `
    width:${size}px;
    height:${size}px;

    top:${Math.random() * 100}%;

    left:${Math.random() * 100}%;

    --dur:${Math.random() * 3 + 2}s;

    animation-delay:${Math.random() * 5}s;

    opacity:${Math.random() * 0.6 + 0.3};

    box-shadow:
      0 0 ${size * 2}px rgba(
        180,
        200,
        255,
        ${Math.random() * 0.4 + 0.1}
      );
  `;

  sky.appendChild(s);
}

/* ESTRELAS CADENTES */

for (let i = 0; i < 6; i++) {

  const ss = document.createElement("div");

  ss.className = "shooting-star";

  ss.style.cssText = `
    top:${Math.random() * 40}%;

    left:${Math.random() * 60 + 30}%;

    --shoot-dur:${Math.random() * 4 + 6}s;

    --delay:${Math.random() * 10 + i * 3}s;
  `;

  sky.appendChild(ss);
}

// PLAYLIST
const playlist = [

{
    title: "Take on Me",
    cover: "audio/icon/9.jpeg",
    src: "audio/Take-on-Me.mp3"
},

{
    title: "On Melancholy Hill",
    cover: "audio/icon/6.jpeg",
    src: "audio/On-Melancholy-Hill.mp3"
},

{
    title: "Superpowers",
    cover: "audio/icon/8.jpeg",
    src: "audio/Superpowers.mp3"
},

{
    title: "See You Again",
    cover: "audio/icon/7.jpeg",
    src: "audio/See-You-Again.mp3"
},

{
    title: "Get You",
    cover: "audio/icon/3.jpeg",
    src: "audio/Get-You.mp3"
},

{
    title: "Front Desk",
    cover: "audio/icon/2.jpg",
    src: "audio/Front-Desk.mp3"
},

{
    title: "Golden Hour",
    cover: "audio/icon/4.jpeg",
    src: "audio/golden-hour.mp3"
},

{
    title: "I Wanna Be Yours",
    cover: "audio/icon/1.jpeg",
    src: "audio/I-Wanna-Be-Yours.mp3"
},

{
    title: "Amar Como Você",
    cover: "audio/icon/0.jpeg",
    src: "audio/amar-como-vc.mp3"
},

{
    title: "Just-the-Two-of-Us",
    cover: "audio/icon/5.jpeg",
    src: "audio/Just-the-Two-of-Us.mp3"
},

{
    title: "Tek It",
    cover: "audio/icon/10.jpeg",
    src: "audio/Tek-It.mp3"
},

{
    title: "this is whatf alling in love feels like",
    cover: "audio/icon/11.jpeg",
    src: "audio/this-is-what-falling-in-love-feels-like.mp3"
},

{
    title: "You Are My High",
    cover: "audio/icon/12.jpeg",
    src: "audio/You-Are-My-High.mp3"
}

];

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const items = document.querySelectorAll(".music-item");

let currentSong = 0;

loadSong(currentSong);

function loadSong(index){

    audio.src = playlist[index].src;

    title.textContent = playlist[index].title;

    cover.src = playlist[index].cover;

    items.forEach(item =>
        item.classList.remove("active")
    );

    items[index].classList.add("active");
}

playBtn.addEventListener("click",()=>{

    if(audio.paused){
        audio.play();
        playBtn.textContent="⏯";
    }else{
        audio.pause();
        playBtn.textContent="▶";
    }

});

nextBtn.addEventListener("click",()=>{

    currentSong++;

    if(currentSong >= playlist.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

    playBtn.textContent="⏯";
});

prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong < 0){
        currentSong = playlist.length - 1;
    }

    loadSong(currentSong);

    audio.play();

    playBtn.textContent="⏯";
});

audio.addEventListener("ended",()=>{

    currentSong++;

    if(currentSong >= playlist.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();
});

audio.addEventListener("timeupdate",()=>{

    const percent =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percent || 0;

});

progress.addEventListener("input",()=>{

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});

items.forEach(item=>{

    item.addEventListener("click",()=>{

        currentSong = Number(item.dataset.index);

        loadSong(currentSong);

        audio.play();

        playBtn.textContent="⏯";

    });

});
