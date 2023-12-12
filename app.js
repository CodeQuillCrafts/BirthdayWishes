document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('#root');
    const text = document.querySelector('#text');
    const user = prompt("What is your name?", "User");
    const age = parseInt(prompt(`What is your age, ${user}`, "19"));
    const birthdayAudio = new Audio('birthday.mp3');
    birthdayAudio.autoplay = true;
    birthdayAudio.loop = true;

    function getRandomNumber() {
        return Math.floor(Math.random() * 200) + 1;
    }

    function addBalloon() {
        let balloon = document.createElement('div');
        balloon.textContent = '🎈';
        balloon.classList.add('balloon');
        balloon.style.paddingTop = getRandomNumber() + 'px';
        balloon.style.paddingBottom = getRandomNumber() + 'px';
        balloon.style.marginTop = getRandomNumber() + 'px';
        balloon.style.marginBottom = getRandomNumber() + 'px';
        root.appendChild(balloon);
    }

    function displayAge(i) {
        if (i <= age + 1) {
            setTimeout(function () {
                text.textContent = i + " years";
                displayAge(i + 1);
            }, 100);
        } else {
            text.textContent = `Happy Birthday ${user}`;
            text.style.color = "blue";
            for (let index = 0; index < 2000; index++) {
                addBalloon();
            }
        }
    }

    birthdayAudio.addEventListener('canplay', function () {
        birthdayAudio.play();
    });
    document.addEventListener('keydown', function () {
        birthdayAudio.play();
    })
    document.addEventListener('click', function () {
        birthdayAudio.play();
    })
    document.addEventListener('load', function () {
        birthdayAudio.play();
    })
    document.addEventListener('mousemove', function () {
        birthdayAudio.play();
    })
    if (alert("Would you like to play song")) {
        birthdayAudio.play();
    }
    displayAge(0);
});