const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'loVEEE';
const latin = 'xxxaaaxxx';
const nums = '000011100001100110100001100101001000001';

const alphabet = katakana + latin + nums;

const fontSize = 20;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}


function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#1F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > .96) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 45);
