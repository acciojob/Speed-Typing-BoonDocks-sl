// Fetch a random quote from the API
function fetchRandomQuote() {
  fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quoteText = document.getElementById('quoteText');
      quoteText.textContent = data.content;
    })
    .catch(error => console.log(error));
}

// Check if the typed text matches the quote
function checkTypedText() {
  const typedText = document.getElementById('quoteInput').value;
  const quoteText = document.getElementById('quoteText').textContent;

  if (typedText === quoteText) {
    document.getElementById('quoteInput').className = 'green-text';
    resetTimer();
    setTimeout(() => {
      document.getElementById('quoteInput').value = '';
      document.getElementById('quoteInput').className = '';
      fetchRandomQuote();
    }, 3000);
  } else {
    document.getElementById('quoteInput').className = 'red-text';
  }
}

// Timer functions
let timer = 0;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    timer++;
    document.getElementById('time').textContent = timer;
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  timer = 0;
  document.getElementById('time').textContent = timer;
}

// Event listener for input changes
document.getElementById('quoteInput').addEventListener('input', checkTypedText);

// Fetch initial random quote and start the timer
fetchRandomQuote();
startTimer();
