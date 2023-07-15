const button = document.getElementById('button');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

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
    .catch((error) => (quote.innerHTML = error));
};

// Display quote to DOM
const displayQuote = (data) => {
  quote.innerHTML = `${data.content}`;
  author.innerHTML = `- ${data.author}`;
};

// Event listeners
button.addEventListener('click', getQuote);

getQuote();
