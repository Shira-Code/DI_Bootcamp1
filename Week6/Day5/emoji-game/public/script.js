document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('emoji-container');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
  
    const fetchEmoji = async () => {
      const response = await fetch('/api/emoji');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data;
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
        feedback.textContent = 'Error loading emoji';
      }
    };
  
    const submitGuess = async (guess, answer) => {
      try {
        const response = await fetch('/api/guess', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ guess, answer }),
        });
        if (!response.ok) throw new Error('Failed to submit guess');
        const result = await response.json();
        feedback.textContent = result.correct ? `Correct! Your score is ${result.score}` : `Wrong! Your score is ${result.score}`;
        displayEmoji();
      } catch (error) {
        feedback.textContent = 'Error submitting guess';
      }
    };
  
    displayEmoji();
  });
  