const bells = new Audio('./sounds/bell.mp3');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let myInterval;
let state = true;

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);

    if(state) {
        state = false;
        let totalSeconds = sessionAmount * 60;
        
        const updateSeconds = () => {

        }
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Session has already started.');
    }
}