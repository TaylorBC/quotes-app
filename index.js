getQuotes = () => {
    return fetch('https://animechan.vercel.app/api/random') 
    .then(res => res.json())
} 
const createQuoteDiv = (animeQuote) => {
    const quoteContainer = document.createElement('div') 
    const anime = document.createElement('h2') 
    const character = document.createElement('h3') 
    const quote = document.createElement('p') 
    
    anime.innerText = animeQuote.anime 
    character.innerText = animeQuote.character 
    quote.innerText = animeQuote.quote 
    
    quoteContainer.append(anime, character, quote) 

    return quoteContainer

}


getQuotes().then((quote) => { 
    const quoteDiv = createQuoteDiv(quote)
    console.log(quoteDiv)

})


        