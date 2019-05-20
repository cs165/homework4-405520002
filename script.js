// NOTE: You may, but do not have to, modify this file, such as to create other
// classes or to call methods on `App`. You may not add any global state
// variables.
var go = document.getElementById('go');
var x = 0;
var inner = '';
var hint = document.querySelector('#hint');
var musicselect = document.getElementById("song-selector");
var musicElement = document.querySelector('#main');
var menuElement = document.querySelector('#menu');
var playurl = {};
var playmark = [];
var kickarray = [];
var control2 = [];
var checkresult = [];
const theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
var input = document.getElementById('query-input');
var apikey = 'hz7i1hkhFYv1uVuAvI732F5jxoqhj3Yr';
var query = '';
var url = '';
var playerapp;
var musicdata;






var recommend = () => {
  error.classList.add('inactive');
  if (input.value.startsWith('n')) {
    hint.innerHTML = theme[7];
    hint.classList.remove('inactive');
    console.log('onkeyup')
  }
  else if (input.value.startsWith('da')) {
    hint.innerHTML = theme[3];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('ca')) {
    hint.innerHTML = theme[0];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('ch')) {
    hint.innerHTML = theme[1];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('co')) {
    hint.innerHTML = theme[2];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('do')) {
    hint.innerHTML = theme[4];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('h')) {
    hint.innerHTML = theme[5];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('f')) {
    hint.innerHTML = theme[6];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('t')) {
    hint.innerHTML = theme[8];
    hint.classList.remove('inactive');
  }
  else if (input.value.startsWith('s')) {
    hint.innerHTML = theme[9];
    hint.classList.remove('inactive');
  }
  else { hint.classList.add('inactive'); }



}

input.addEventListener('keyup', recommend);

var onKick = () => {
  kickarray.push('k');
  console.log('kick');
 
}

var load_music = () => {


  if (control2[0] == 'ok') {
    playerapp = new AudioPlayer();
    for (let j = 0; j < 6; j++) {
      if (musicselect.value == j) {
        console.log(Object(musicdata)[j])
        event.preventDefault();
        playerapp.setSong(playurl[j]);
        playerapp.setKickCallback(onKick);
        playerapp.play();
        control2.splice(0, 1);
        break;

      }
    }


  }
  if (playmark[playmark.length - 1] == 'pause') {
    playerapp.pause();
 
  }
  else {
    playerapp.play();
  

  }
}


















function active(element) {
  element.classList.remove('inactive');
}

var clickgo = (event) => {
  var loading = document.getElementById('loading');
  loading.classList.remove('inactive');
  loading.classList.add('active');
  console.log("active loading...");
 

  control2.push('ok');
  for (let j = 0; j < 10; j++) {
    if (input.value == theme[j]) {
     
      x = 1;
      console.log('click');
      query = input.value;
      url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apikey;
      playmark.push('play');
      var app1 = new App();
      load_music();
      checkresult.push('ok');
      break;
    }
    else { console.log('fff'); }
  }

  if (checkresult.indexOf('ok') == -1) {
    const error = document.querySelector('#error');
    active(error);
    error.textContent = 'Not enough gifs for this theme. Please try another.';
    event.preventDefault();
  }
  else { console.log('uuuuuu'); }

  
  setInterval(load_music, 10);




}







go.addEventListener('click', clickgo);
go.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    clickgo(event);
    event.preventDefault();
    
  }
}, false);



window.onload = function () {
  fetch(' https://fullstackccu.github.io/homeworks/hw4/songs.json')
    .then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      musicdata = json;
      console.log(json.length);
      console.log(musicdata['夫妻']['artist']);
      console.log(musicdata);
      console.log(Object.values(Object.values(musicdata)[0])[0]);

      for (var i = 0; i < 6; i++) {
        let a = Object.values(musicdata)[i];
        inner = inner + '<option value=' + i + ' id=option' + i + '>' + String(Object.values(a)[2]) + ':' + String(Object.values(a)[1]) + '</option>';

      }
      musicselect.innerHTML = inner;

      for (var i = 0; i < 6; i++) {
        let a = Object.values(musicdata)[i];
        playurl[i] = Object.values(a)[0];
      }
      console.log(playurl);
    });



  input.placeholder = theme[parseInt((theme.length) * Math.random())];
  console.log('llllllllllll' + parseInt((theme.length) * Math.random()));


}
