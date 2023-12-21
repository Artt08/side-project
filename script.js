
    function checkTextLength() {
        // Get the value from the text box
        var enteredText = document.getElementById('textInput').value;

        // Check if the length of the entered text is seven
        var isSevenLetters = enteredText.length === 7;

        // Display the result
        var resultMessage = isSevenLetters ? 'true' : 'false';
        document.getElementById('result').innerHTML = resultMessage;
    }