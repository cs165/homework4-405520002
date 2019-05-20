// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
// const audioplayer=document.querySelector('#player');
var play=()=>{
  if(playmark[playmark.length-1]=='play'){
  document.querySelector('.playmark').style.backgroundImage='url(images/play.png)';
  console.log('play');
  playmark.push('pause');
}

  else{
    document.querySelector('.playmark').style.backgroundImage='url(images/pause.png)';
    console.log('pause');
    playmark.push('play');
  }
  
}
document.querySelector('.playmark').addEventListener('click',play);
class PlayButton {
  constructor(containerElement,play) {
    this.containerElement=containerElement;
    this.play=play;
    // // TODO(you): Implement the constructor and add fields as necessary.
  }

  

 
  // TODO(you): Add methods as necessary.
}
