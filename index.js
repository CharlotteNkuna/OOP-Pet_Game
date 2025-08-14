// ____________________________________
//     Object-Oriented Programming (OOP)
// ____________________________________

class Pet {
    constructor(name, soundText, image, soundUrl) {
      this.name = name;
      this.soundText = soundText;
      this.image = image;
      this.soundUrl = new Audio(soundUrl) //from the library // its encapsulation: covering sound tyrack/properties  its abstraction: we dont know where it comes from
      this.playCount = 0; //counter variable
    }
  
    speak() {
      alert(this.soundText); //alert box
      this.soundUrl.currentTime = 0; // ensures restart on each click. cant stop/pause
      this.soundUrl.play();
    }
  
    play() {
      this.playCount++; //increament from 0 to1
      this.soundUrl.load; //makes sure that the sound can start without delay
      this.speak(); // we are looping back to speak function, to make the sound keep playing
      updateCounter(this.playCount); //got mapped with count
      showFunActions(this.name);
    }
  }
  
  // Global variable to store the chosen pet
  let currentPet = null; //currentpet is object
  
  // ____________________________________
  //     Function to choose a pet
  // ____________________________________
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet('Dog', 'You have petted the dog! 🐶', 'https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg',
        'media/big-dog-barking-300504.mp3');
    
    } else if (type === 'cat') {
      currentPet = new Pet('Cat', 'You have petted the cat! 🐱', 'https://images.pexels.com/photos/3030635/pexels-photo-3030635.jpeg', 
        'media/cat-meow-sound-383823.mp3');
    
    } else if (type === 'ballPython') {
        currentPet = new Pet('Ball python', 'You have gently touched the python! 🐍', 'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg', 
          'media/snake-hiss-95241.mp3');
    
    } else if (type === 'parrot') {
        currentPet = new Pet('parrot', 'You have played with the parrot! 🦜', 'https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg', 
          'media/parrots-88486.mp3');
    }
  
    document.getElementById('petImage').src = currentPet.image; //also mapping to html
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
  
  // ____________________________________
  //     Function to play with the pet
  // ____________________________________
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  // ____________________________________
  //     Function to update the counter
  // ____________________________________
  function updateCounter(count) { //count is mapping, marges the counter variable with the parametrers so that it keeps playing over n over
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  
  // ____________________________________
  //     Function + Loop: Fun pet actions
  // ____________________________________
  
  function showFunActions(petName) {
    let actions = [];
      if (petName === 'Dog') {
        actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
      
      } else if (petName === 'Cat') {
        actions = ['Meow', 'Purr', 'Chase Mouse'];
      
      } else if (petName === 'Ball python') {
        actions = ['Hiss', 'Wrap around arm', 'Stick out tongue'];
      
    } else if (petName === 'parrot') {
        actions = ['Squak', 'Mimic words', 'Flies'];
      }
  
  //function showFunActions(petName) {
    //const actions = petName === 'Dog'
     // ? ['Bark', 'Wag Tail', 'Fetch Ball']
      //: ['Meow', 'Purr', 'Chase Mouse']
  
    const actionBox = document.getElementById('actions');  //to load properties
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    // Loop through actions and show them
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += `${actions[i]}<br>`;
    }
  }
  