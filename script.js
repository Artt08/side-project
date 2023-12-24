
    function checkWord() {
        var userInput = document.getElementById('wordInput').value.toLowerCase();

        if (userInput === 'tales') {
            // If the entered word is 'tales'
            document.getElementById('result').innerHTML = '<a href="https://discord.com/channels/292718713453412362/874645597301391440"><img src="https://cdn.discordapp.com/attachments/940583485964431431/1186690989453213736/1048206470640050276.png?ex=65942b1b&is=6581b61b&hm=27c62a9d9ebb4c257e536e1923b5f2b12e8382f1d467ec2dfcac985eab462a9e&" alt="Tales Image"></a>';
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
