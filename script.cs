
  const characters = ['rick', 'summer', 'morty', 'pickle'];
  const characterDiv = document.getElementById('character');

  // Pick a random character
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

  // Add the class to the div
  characterDiv.classList.add(randomCharacter);

