// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, 
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerInterval = null;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    
    timerInterval = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

btnStop.addEventListener('click', () => {

    clearInterval(timerInterval);

    btnStart.disabled = false;
    btnStop.disabled = true;
});
