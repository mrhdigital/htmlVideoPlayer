//alert("linked");

/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functons */
function togglePlay() {
    // use ternary operator
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  
// if (video.paused) {
//     video.play(); 
//     } else {
//         video.pause();
//     }
}   

function updateButton() {
    //console.log('Update the button');
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
function skip() {
    //console.log('skipping!');
    console.log(this.dataset.skip);
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));
