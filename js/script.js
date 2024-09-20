const header = document.querySelector('h1');
const paragraph = document.querySelector('p:nth-child(2)');
const image = document.querySelector('#main-image');
const noteOutput = document.querySelector('.output');
const timerDisplay=document.querySelector('#time');
const timerBtn=document.querySelector('#start-btn');

header.classList.add('crazy');

header.style.textDecoration = 'underline';

// image.setAttribute('src', 'https://images.pexels.com/photos/28056731/pexels-photo-28056731/free-photo-of-a-plate-with-a-bagel-and-coffee-on-it.jpeg')

// inserting a new article element into the outputsection
noteOutput.insertAdjacentHTML('beforeend', `
    <article>
    <h3>New note text<h3>
    <p> Added On: 9/20/2024</p>
  </article>
    `);

    // Timers
    // setInterval(function(){
    //     console.log('time up!');
    // }, 3000);
let count = 10;
let started = false;

    

    timerBtn.addEventListener('click', function (){
        if(!started) {
            const timer = setInterval(function(){
                count--;
        
                timerDisplay.innerText = 'Time: ' +count;
        
                if (count<=0) {
                    clearInterval(timer);
                    timerDisplay.innerText = 'Time: 10';
                    count = 10;
                    started=false;
                }
            }, 1000);

            started=true;
        }
    });

    // CREATE A BUTTON THAT RESETS THE TIMER.. HIT THE TIMER