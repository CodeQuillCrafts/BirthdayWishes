document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const root = document.querySelector('#root');
    const age = 19;

    function displayAge(i) {
        if (i <= age + 1) {
            setTimeout(() => {
                root.textContent = i + " years";
                displayAge(i + 1);
            }, 100);
        } else {
            root.textContent = "Happy Birthday";
            root.style.color = "blue";
        }
    }
    displayAge(0);
});
