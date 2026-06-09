const openBtn = document.getElementById('openInvitation');
const welcomeScreen = document.getElementById('welcome-screen');
const envelope = document.querySelector('.envelope');
const mainContent = document.getElementById('mainContent');

openBtn.addEventListener('click', () => {

envelope.classList.add('open');

setTimeout(() => {
welcomeScreen.style.display = 'none';
mainContent.style.display = 'block';
window.scrollTo(0,0);
},1000);

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add('visible');
}

});

},{threshold:.15});

document.querySelectorAll('.fade-in').forEach(section=>{
observer.observe(section);
});

const weddingDate =
new Date("2026-08-08T13:45:00+09:00");

function updateCountdown(){

const now = new Date();

const diff = weddingDate - now;

if(diff <= 0){

document.getElementById('countdown').innerHTML =
"Сегодня наш особенный день ❤️";

return;
}

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff/(1000*60*60))%24);
const minutes = Math.floor((diff/(1000*60))%60);
const seconds = Math.floor((diff/1000)%60);

document.getElementById('countdown').innerHTML =

`<div class="time-box">

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
</div>`;
}

updateCountdown();
setInterval(updateCountdown,1000);

