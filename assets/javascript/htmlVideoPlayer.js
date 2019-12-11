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
    //console.log(this.dataset.skip);
    //(this.dataset.skip is a string)
    //apply parseFloat method to convert into number.
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    //console.log(this.name);
    //console.log(this.value);
}   
function handleProgress(){
    console.log('handleProgess!')
    const percent = (video.currentTime / video.duration) * 100;

    
   // console.log(percent);
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}
/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
progress.addEventListener('click', scrub);