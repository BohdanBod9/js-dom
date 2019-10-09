const link = document.querySelector('a');
link.textContent = 'Nissan 200SX';
link.href = 'https://en.wikipedia.org/wiki/Nissan_200SX';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — tire slayer.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara.cloneNode(true));

sect.removeChild(document.querySelectorAll('p')[document.querySelectorAll('p').length-1]);

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('selected');

const button = document.createElement('button');
button.innerText = 'KIll Me!';
sect.appendChild(button);
button.addEventListener('click', () => alert('Drift!') );

// Clock
const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 1000 );

// Calc
const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );