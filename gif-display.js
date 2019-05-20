// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.

class GifDisplay {
  constructor(containerElement,imageUrl,nextgif) {
    this.containerElement=containerElement;
    this.containerElement.style.backgroundImage='url('+nextgif+')';
    const image = new Image();
    image.src = imageUrl;
    image.style.width='100%';
    containerElement.append(image);
  
    // TODO(you): Implement the constructor and add fields as necessary.
  }

  

  
  // TODO(you): Add methods as necessary.
}
