
  const characters = ['rick', 'summer', 'morty', 'pickle'];
  const characterDiv = document.getElementById('character');

  // Pick a random character
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

  // Add the class to the div
  characterDiv.classList.add(randomCharacter);

// Select the "Intro" button
  const introBtn = document.querySelector(".navbt h3:contains('Intro')") || document.querySelectorAll(".navbt")[0];

  // Select the target section
  const target = document.querySelector(".s2div1");

  // Add click event
  introBtn.addEventListener("click", function() {
    target.scrollIntoView({ behavior: "smooth" });
  });