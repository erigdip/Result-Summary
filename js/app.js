let result = document.getElementById('Result');
let showStatus = document.getElementById('Status');
let Tcomparison = document.getElementById('comparison-t');
let Ncomparison = document.getElementById('comparison-n');

let reaction = document.getElementById('reVal');
let memory = document.getElementById('meVal');
let verbal = document.getElementById('veVal');
let visual = document.getElementById('viVal');

const Bcolor = document.getElementById('bg-color');
const Rcolor = document.getElementById('bg-result-color');

let button = document.getElementById('ButtonBox');

button.addEventListener('click', generatevalues);

function generatevalues() {
reactionValue = parseInt(Math.random() * 100);
memoryValue = parseInt(Math.random() * 100);
verbalValue = parseInt(Math.random() * 100);
visualValue = parseInt(Math.random() * 100);

reaction.innerHTML = reactionValue;
memory.innerHTML = memoryValue;
verbal.innerHTML = verbalValue;
visual.innerHTML = visualValue;

resultValue = parseInt((reactionValue + memoryValue + verbalValue + visualValue) / 4);

result.innerHTML = resultValue;

if (resultValue >= 75){
    showStatus.innerHTML = 'Great';
    Bcolor.style.backgroundImage = 'linear-gradient(180deg, #6743ff, 50%, #312ce9)';
    Rcolor.style.backgroundImage = 'linear-gradient(180deg, #4b23c9, 30%, #312ce9)';
    Tcomparison.innerText = 'higher';
    Ncomparison.innerHTML = parseInt((Math.random() * 25) + 75);
} else if (resultValue >= 50 && resultValue < 75){
    showStatus.innerHTML = 'Warning';
    Bcolor.style.backgroundImage = 'linear-gradient(180deg, hsl(62deg 100% 51%) 0%, hsl(60deg 97% 48%) 11%, hsl(58deg 98% 48%) 22%, hsl(56deg 98% 47%) 33%, hsl(53deg 99% 46%) 44%, hsl(51deg 99% 45%) 56%, hsl(49deg 100% 44%) 67%, hsl(47deg 100% 43%) 78%, hsl(44deg 100% 42%) 89%, hsl(42deg 100% 41%) 100%)';
    Rcolor.style.backgroundImage = 'linear-gradient(180deg, hsl(62deg 100% 51%) 0%, hsl(60deg 97% 48%) 11%, hsl(58deg 98% 48%) 22%, hsl(56deg 98% 47%) 33%, hsl(53deg 99% 46%) 44%, hsl(51deg 99% 45%) 56%, hsl(49deg 100% 44%) 67%, hsl(47deg 100% 43%) 78%, hsl(44deg 100% 42%) 89%, hsl(42deg 100% 41%) 100%)';
    Tcomparison.innerText = 'higher';
    Ncomparison.innerHTML = parseInt((Math.random() * 25) + 50);
} else if (resultValue >= 25 && resultValue < 50){
    showStatus.innerHTML = 'Danger';
    Bcolor.style.backgroundImage = 'linear-gradient(180deg, hsl(33deg 100% 51%) 0%, hsl(31deg 97% 50%) 11%, hsl(30deg 98% 49%) 22%, hsl(28deg 99% 47%) 33%, hsl(26deg 99% 46%) 44%, hsl(24deg 100% 45%) 56%, hsl(22deg 100% 44%) 67%, hsl(20deg 100% 43%) 78%, hsl(17deg 100% 42%) 89%, hsl(13deg 100% 41%) 100%)';
    Rcolor.style.backgroundImage = 'linear-gradient(180deg, hsl(33deg 100% 51%) 0%, hsl(31deg 97% 50%) 11%, hsl(30deg 98% 49%) 22%, hsl(28deg 99% 47%) 33%, hsl(26deg 99% 46%) 44%, hsl(24deg 100% 45%) 56%, hsl(22deg 100% 44%) 67%, hsl(20deg 100% 43%) 78%, hsl(17deg 100% 42%) 89%, hsl(13deg 100% 41%) 100%)';
    Tcomparison.innerText = 'lower';
    Ncomparison.innerHTML = parseInt((Math.random() * 25) + 50);
} else if (resultValue < 25){
    showStatus.innerHTML = 'Critical';
    Bcolor.style.backgroundImage = 'linear-gradient(180deg, hsl(13deg 100% 51%) 0%, hsl(12deg 97% 49%) 11%, hsl(12deg 97% 48%) 22%, hsl(11deg 98% 46%) 33%, hsl(10deg 98% 45%) 44%, hsl(9deg 99% 43%) 56%, hsl(7deg 99% 42%) 67%, hsl(5deg 99% 40%) 78%, hsl(3deg 100% 39%) 89%, hsl(0deg 100% 37%) 100%)';
    Rcolor.style.backgroundImage = 'linear-gradient(180deg, hsl(13deg 100% 51%) 0%, hsl(12deg 97% 49%) 11%, hsl(12deg 97% 48%) 22%, hsl(11deg 98% 46%) 33%, hsl(10deg 98% 45%) 44%, hsl(9deg 99% 43%) 56%, hsl(7deg 99% 42%) 67%, hsl(5deg 99% 40%) 78%, hsl(3deg 100% 39%) 89%, hsl(0deg 100% 37%) 100%)';
    Tcomparison.innerText = 'lower';
    Ncomparison.innerHTML = parseInt((Math.random() * 25) + 75);
}
}