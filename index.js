// ____________________________________
//     Object-Oriented Programming (OOP)
// ____________________________________

class Pet {
    constructor(name, sound, image) {
      this.name = name;
      this.sound = sound;
      this.image = image;
      this.playCount = 0;
    }
  
    speak() {
      alert(this.sound);
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunActions(this.name);
    }
  }
  
  // Global variable to store the chosen pet
  let currentPet = null;
  
  // ____________________________________
  //     Function to choose a pet
  // ____________________________________
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg');
    } else {
      currentPet = new Pet('Cat', 'Meow! 🐱', 'https://images.pexels.com/photos/3030635/pexels-photo-3030635.jpeg');
    }
  
    document.getElementById('petImage').src = currentPet.image;
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
  function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  
  // ____________________________________
  //     Function + Loop: Fun pet actions
  // ____________________________________
  function showFunActions(petName) {
    const actions = petName === 'Dog'
      ? ['Bark', 'Wag Tail', 'Fetch Ball']
      : ['Meow', 'Purr', 'Chase Mouse'];
  
    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    // Loop through actions and show them
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += `✅ ${actions[i]}<br>`;
    }
  }
  