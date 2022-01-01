const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")

// Show new Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quoteText.innerHTML = quote.text
    authorText.innerHTML = quote.author
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch(err) {
        // Catch Error Here
    }
}

// On Load
getQuotes() 
