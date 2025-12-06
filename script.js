const quoteInput = document.getElementById('quoteInput');
const addBtn = document.getElementById('addBtn');
const quoteList = document.getElementById('quoteList');

let quotes = JSON.parse(localStorage.getItem('quotes')) || [];

// Load quotes on page load
loadQuotes();

addBtn.addEventListener('click', function (e) {
    addQuote();
});

quoteInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addQuote();
    }
});

function addQuote() {
    const text = quoteInput.value.trim();
    if (text) {
        quotes.unshift(text); // Add to beginning of LS array
        quoteInput.value = '';
        saveQuotes();
        loadQuotes();
    }
}

function deleteQuote(index) {
    quotes.splice(index, 1);
    saveQuotes();
    loadQuotes();
}

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function loadQuotes() {
    quoteList.innerHTML = '';
    quotes.forEach(function (quote, index) {
        const li = document.createElement('li');
        li.className = 'quote-item';

        const span = document.createElement('span');
        span.className = 'quote-text';
        span.innerHTML = quote;

        const btn = document.createElement('button');
        btn.className = 'delete-btn';
        btn.textContent = 'Delete';
        btn.addEventListener('click', function () {
            deleteQuote(index);
        });

        li.appendChild(span);
        li.appendChild(btn);
        quoteList.appendChild(li);
    });
}
