document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const feedback = document.getElementById('feedback');

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            feedback.textContent = 'Congratulations! You guessed the number!';
            guessButton.disabled = true;
        } else if (attempts > 0) {
            if (userGuess < randomNumber) {
                feedback.textContent = `Too low! You have ${attempts} attempts left.`;
            } else {
                feedback.textContent = `Too high! You have ${attempts} attempts left.`;
            }
        } else {
            feedback.textContent = `Sorry, you're out of attempts! The number was ${randomNumber}.`;
            guessButton.disabled = true;
        }

        guessInput.value = '';
    });
});
