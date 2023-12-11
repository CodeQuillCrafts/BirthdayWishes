document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('#root');
    const text = document.querySelector('#text');
    const age = 19;
    const birthdayAudio = new Audio('birthday.mp3');
    birthdayAudio.autoplay = true;

    function getRandomNumber() {
        return Math.floor(Math.random() * 70) + 1;
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

    function playAudio() {
        return new Promise((resolve, reject) => {
            birthdayAudio.addEventListener('canplaythrough', function () {
                console.log("audio start");
                birthdayAudio.play();
                console.log("audio end");
                resolve();
            });

            birthdayAudio.addEventListener('error', function (error) {
                reject(error);
            });
        });
    }

    async function displayAge(i) {
        try {
            if (i <= age + 1) {
                await new Promise(resolve => setTimeout(resolve, 100));
                text.textContent = i + " years";
                await displayAge(i + 1);
            } else {
                text.textContent = "Happy Birthday";
                text.style.color = "blue";
                for (let index = 0; index < 2000; index++) {
                    addBalloon();
                }
                await playAudio();
            }
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    }

    displayAge(0);
});
