const button = document.getElementById('button');
const quoteDiv = document.getElementById('quote');

// Fetch quote from API
const getQuote = () => {
  fetch('https://api.quotable.io/random/')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Request failed. Please try again.');
      }

      return res.json();
    })
    .then((data) => displayQuote(data))
    .catch((error) => (quoteDiv.innerHTML = error));
};

// Display quote to DOM
const displayQuote = (quote) => {
  quoteDiv.innerHTML = `"${quote.content}" <br> - ${quote.author}`;
};

// Event listeners
button.addEventListener('click', getQuote);

getQuote();
