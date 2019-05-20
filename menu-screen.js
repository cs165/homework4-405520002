// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.

class MenuScreen {
  constructor(containerElement) {
      this.containerElement = containerElement;

    }
    // TODO(you): Implement the constructor and add fields as necessary.
  show(){
  
    this.containerElement.classList.remove('inactive');
  }

  hide(){
   this.containerElement.classList.add('inactive');
   this.containerElement.innerHTML='';

  }
  

  


  
}
