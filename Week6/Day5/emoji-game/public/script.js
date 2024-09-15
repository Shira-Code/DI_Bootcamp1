document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('emoji-container');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
  
    const fetchEmoji = async () => {
      const response = await fetch('http://localhost:3005/api/emoji'); // Ensure this URL matches the server port
      if (!response.ok) {
        throw new Error('Failed to fetch emoji');
      }
      return response.json();
    };
  
    const displayEmoji = async () => {
      try {
        const data = await fetchEmoji();
        emojiContainer.textContent = data.emoji;
        optionsContainer.innerHTML = '';
        data.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.onclick = () => submitGuess(option, data.answer);
          optionsContainer.appendChild(button);
        });
      } catch (error) {
        feedback.textContent = `Error: ${error.message}`;
      }
    };
  
    const submitGuess = async (guess, answer) => {
      try {
        const response = await fetch('http://localhost:3005/api/guess', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ guess, answer }),
        });
        if (!response.ok) {
          throw new Error('Failed to submit guess');
        }
        const result = await response.json();
        feedback.textContent = result.correct ? `Correct! Your score is ${result.score}` : `Wrong! Your score is ${result.score}`;
        displayEmoji();
      } catch (error) {
        feedback.textContent = `Error: ${error.message}`;
      }
    };
  
    displayEmoji();
  });
  