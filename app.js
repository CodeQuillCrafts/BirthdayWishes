const root = document.querySelector('#root');
const text = document.querySelector('#text');
const age = 19;
const birthdayAudio = new Audio('birthday.mp3');

function getRandomNumber() {
    return Math.floor(Math.random() * 40) + 1;
}

function addBalloon() {
    let balloon = document.createElement('div');
    balloon.textContent = '🎈';
    balloon.classList.add('balloon');
    const randomPadding = getRandomNumber() + 'px';
    balloon.style.padding = randomPadding;
    const randomMargin = getRandomNumber() + 'px';
    balloon.style.margin = randomMargin;
    root.appendChild(balloon);
}

function displayAge(i) {
    if (i <= age + 1) {
        setTimeout(() => {
            text.textContent = i + " years";
            displayAge(i + 1);
        }, 100);
    } else {
        text.textContent = "Happy Birthday";
        text.style.color = "blue";
        for (let index = 0; index < 2000; index++) {
            addBalloon();
        }

        document.addEventListener('mouseover', function () {
            birthdayAudio.play();
        });
    }
}

displayAge(0);