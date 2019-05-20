// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
var count = 0;
var count2 = 0;
var count3=0;
var random_array = [];
class MusicScreen {
  constructor(containerElement) {

    this.containerElement = containerElement;
    this.gifcontent = [];
  }

  show() {
    this.containerElement.style.backgroundColor = 'white';
    this.containerElement.classList.remove('inactive');
    playmark.push('play');
    const playmark2 = document.querySelector('.playmark');
    this.playbutton = new PlayButton(playmark2, play);


  }

  hide() {
    this.containerElement.innerHTML = '';

    console.log('showmusicscreen');
  }



  load_gif() {
    fetch(url)
      .then(this._onResponse)
      .then(this._onJsonReady);
  }


  _onJsonReady(json) {
    console.log('catch the gif');
    console.log(json['data']);
    const json2 = json.data[count].images.downsized.url;
    const playscreen = document.querySelector('.bodyarea')
    count = parseInt((theme.length) * Math.random());
    const gif = new GifDisplay(playscreen, json2);
    random_array.push(count);
    setInterval(function () {
      if (playmark[playmark.length - 1] == 'play') {
        if (kickarray.length != count2) {
          playscreen.innerHTML = '';
          count2 = kickarray.length;
          console.log(random_array);
          

        }
      }
    }

      , 1);

    setInterval(function () {
      if (playmark[playmark.length - 1] == 'play') {
        console.log('listener');
        if (playscreen.innerHTML == '') {
          count3=parseInt((theme.length) * Math.random());
          while (random_array.indexOf(count) == 1||count==count3) {
            count = parseInt((theme.length) * Math.random());
            random_array.splice(0, 1);
            random_array.push(count);
            console.log('duplicate'+random_array);

          }
          const json2 = json.data[count].images.downsized.url;
          const nextgif= json.data[count3].images.downsized.url;
          const gif = new GifDisplay(playscreen, json2,nextgif);
          console.log(nextgif);
          count2 = kickarray.length;
          count=count3;
          

         

        }

      }



    }

      , 1);









  }

  _onResponse(response) {
    return response.json();

  }


}
  // TODO(you): Add methods as necessary.



