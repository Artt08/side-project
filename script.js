
    function checkWord() {
            var userInput = document.getElementById('wordInput').value.toLowerCase();

            if (userInput === 'tales') {
                // If the entered word is 'tales'
                document.getElementById('result').innerHTML = '<a href="https://example.com"><img src="https://example.com/your-image.jpg" alt="Tales Image"></a>';
            } else {
                // If the entered word is not 'tales'
                document.getElementById('result').innerText = 'Try again!';
            }
        }
