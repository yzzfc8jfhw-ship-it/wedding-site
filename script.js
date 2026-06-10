const openBtn = document.getElementById('openInvitation');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('mainContent');
const envelope = document.querySelector('.envelope');

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('floatingMusicBtn');

let musicPlaying = false;

// ---------------------
// ОТКРЫТИЕ КОНВЕРТА
// ---------------------

openBtn.addEventListener('click', () => {

```
envelope.classList.add('open');

setTimeout(() => {

    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';

    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    revealSections();

}, 900);
```

});

// ---------------------
// МУЗЫКА
// ---------------------

musicBtn.addEventListener('click', () => {

```
if (!musicPlaying) {

    music.play();

    musicBtn.innerHTML = '❚❚';

    musicPlaying = true;

} else {

    music.pause();

    musicBtn.innerHTML = '♪';

    musicPlaying = false;

}
```

});

// ---------------------
// ТАЙМЕР
// ---------------------

const weddingDate = new Date('2026-08-08T13:45:00+09:00');

function updateCountdown() {

```
const now = new Date();

const diff = weddingDate - now;

if (diff <= 0) {

    document.getElementById('countdown').innerHTML =
    '<div class="time-box"><div class="time-number">❤️</div><div class="time-label">Этот день настал</div></div>';

    return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutes = Math.floor(
    (diff % (1000 * 60 * 60))
    / (1000 * 60)
);

const seconds = Math.floor(
    (diff % (1000 * 60))
    / 1000
);

document.getElementById('countdown').innerHTML = `

    <div class="time-box">
        <div class="time-number">${days}</div>
        <div class="time-label">дней</div>
    </div>

    <div class="time-box">
        <div class="time-number">${hours}</div>
        <div class="time-label">часов</div>
    </div>

    <div class="time-box">
        <div class="time-number">${minutes}</div>
        <div class="time-label">минут</div>
    </div>

    <div class="time-box">
        <div class="time-number">${seconds}</div>
        <div class="time-label">секунд</div>
    </div>

`;
```

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ---------------------
// АНИМАЦИЯ БЛОКОВ
// ---------------------

const observer = new IntersectionObserver(

(entries) => {

```
entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.classList.add('visible');

    }

});
```

},

{
threshold: 0.15
}

);

function revealSections() {

```
document
.querySelectorAll('.fade-in')
.forEach(section => {

    observer.observe(section);

});
```

}

// ---------------------
// ПЕРВЫЙ ЭКРАН ENTER
// ---------------------

document.addEventListener('keydown', (e) => {

```
if (
    e.key === 'Enter'
    &&
    welcomeScreen.style.display !== 'none'
) {

    openBtn.click();

}
```

});
