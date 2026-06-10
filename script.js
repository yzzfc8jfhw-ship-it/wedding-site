document.addEventListener('DOMContentLoaded', () => {

const openBtn = document.getElementById('openInvitation');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('mainContent');
const envelope = document.querySelector('.envelope');

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('floatingMusicBtn');

let musicPlaying = false;

// ОТКРЫТИЕ КОНВЕРТА

if(openBtn){

openBtn.addEventListener('click', () => {

if(envelope){
envelope.classList.add('open');
}

setTimeout(() => {

welcomeScreen.style.display = 'none';
mainContent.style.display = 'block';

window.scrollTo(0,0);

if(music){

music.play()
.then(() => {

musicPlaying = true;
musicBtn.innerHTML = '❚❚';

})
.catch(() => {});

}

document.querySelectorAll('.fade-in').forEach(el => {
observer.observe(el);
});

}, 800);

});

}

// МУЗЫКА

if(musicBtn && music){

musicBtn.addEventListener('click', () => {

if(!musicPlaying){

music.play();
musicBtn.innerHTML = '❚❚';
musicPlaying = true;

}else{

music.pause();
musicBtn.innerHTML = '♪';
musicPlaying = false;

}

});

}

// ТАЙМЕР

const weddingDate = new Date('2026-08-08T13:45:00+09:00');

function updateCountdown(){

const countdown = document.getElementById('countdown');

if(!countdown) return;

const now = new Date();
const diff = weddingDate - now;

if(diff <= 0){

countdown.innerHTML = `

<div class="time-box">
<div class="time-number">❤</div>
<div class="time-label">Этот день настал</div>
</div>
`;

return;

}

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
const seconds = Math.floor((diff%(1000*60))/1000);

countdown.innerHTML = `

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

}

updateCountdown();
setInterval(updateCountdown,1000);

// АНИМАЦИИ

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('visible');

}

});

},{
threshold:0.15
  
});
const form = document.getElementById('rsvpForm');

if(form){

form.addEventListener('submit', async (e) => {

e.preventDefault();

const drinks = [];

document
.querySelectorAll('.checkboxes input:checked')
.forEach(el => drinks.push(el.value));

const data = {

name: form.name.value,

attendance: form.attendance.value,

drinks: drinks.join(", "),

secondDay: form.secondDay.value

};

await fetch(
"https://script.google.com/macros/s/AKfycbxC93YTSrdnSax0TyxBBg_jLCsa09sXrhoLgainsDAQH-rpgjbAADD8xnmn3CPavnHCgg/exec",
{
method:"POST",
body:JSON.stringify(data)
}
);

document.getElementById(
'successMessage'
).innerHTML =
'Спасибо! Мы получили Ваш ответ 🤍';

form.reset();

});

}
});
