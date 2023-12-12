document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('#root');
    const text = document.querySelector('#text');
    const age = 19;
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

    function playAudio() {
        return new Promise((resolve, reject) => {
            document.addEventListener('click', function () {
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
            console.error('Error :', error);
        }
    }

    displayAge(0);
});
