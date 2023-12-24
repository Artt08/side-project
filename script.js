
function checkWord() {
  var userInput = document.getElementById('wordInput').value.toLowerCase();

  if (userInput === 'tales') {
    // If the entered word is 'tales'
    document.getElementById('result').innerHTML = '<a href="https://discord.gg/rakazone-s-chill-zone-292718713453412362"><img src="final.png" alt="Tales Image"></a>';
  } else {
    // If the entered word is not 'tales'
    var randomMessages = [
      'Try again!',
      'Not quite there.',
      'Give it another shot.',
      'Oops, that\'s not it.',
      'Keep trying!'
    ];

    var randomIndex = Math.floor(Math.random() * randomMessages.length);
    document.getElementById('result').innerText = randomMessages[randomIndex];
  }
}
