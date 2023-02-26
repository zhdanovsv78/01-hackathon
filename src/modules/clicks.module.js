import { Module } from '../core/module';

export class ClicksModule extends Module {
  timer() {
    // timer logic

    const timer = document.querySelector('.clicks-timer');
    timer.style.display = 'flex';
    let timerCount = 3;
    timer.innerHTML = `00:0${timerCount}`;

    const countDown = setInterval(() => {
      timerCount--;
      timer.innerHTML = `00:0${timerCount}`;
      if (timerCount <= 0 && timerCount < 1) {
        timerCount = 0;
        clearInterval(countDown);
      }
    }, 1000);

    setTimeout(() => {
      timer.style.display = 'none';
    }, 4000);

    // clicks amount logic

    const clicksAmount = document.querySelector('.clicks-amount');
    clicksAmount.style.display = 'block';
    let clickCounter = 0;
    document.body.addEventListener('click', () => {
      clickCounter++;
      clicksAmount.textContent = `Clicks amount: ${clickCounter}`;
    });

    setTimeout(() => {
      clicksAmount.style.display = 'none';

      const resultClick = document.querySelector('.final-result');
      resultClick.style.display = 'block';
      resultClick.textContent = `YOUR RESULT IS ${clickCounter} CLICKS!`;
    }, 4000);

    setTimeout(() => {
      const resultClick = document.querySelector('.final-result');
      resultClick.style.display = 'none';
    }, 7000);
  }

  trigger() {

    this.timer()
    // const menu = document.querySelector('.menu');
    // menu.addEventListener('click', () => {
    //   this.timer();
    //   const { target } = event;
    //   console.log(target);
    }
  }

