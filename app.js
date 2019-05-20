// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.



var musicelement2;
const player = document.querySelector('form');






class App {
  constructor(container) {
    const menuElement = document.querySelector('#menu');
    const musicElement = document.querySelector('#main');
    const playbutton = document.querySelector('.playmark')
    this.menu = new MenuScreen(menuElement);
    this.menu.hide();
    this.music = new MusicScreen(musicElement);
    this.music.show();
    this.music.load_gif();

  }

}


// TODO(you): Implement the constructor and add fields as necessary.


function change() {
  if (playmark[playmark.length - 1] == 'play') {
    var audioplay = new AudioPlayer(player);
    audioplay.pause();
    playbutton2.style.backgroundImage = 'url(images/pause.png)';
    playmark.push('pause');
  }
  else {
    var audioplay2 = new AudioPlayer(player);
    audioplayer.play();
    playbutton2.style.backgroundImage = 'url(images/play.png)';
    playmark.push('play');
  }
}


  // TODO(you): Add methods as necessary.

