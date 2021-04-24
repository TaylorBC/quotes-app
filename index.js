 const getQuotes = () => { 
     return fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => console.log(quote)) } 

        getQuotes().then(quote => { 
            makeQuoteDiv(quote)
        }) 
        
        const makeQuoteDiv = (quote) => {
            const div = document.createElement('div') 
            const h3 = document.createElement('h3') 
            const p = document.createElement('p') 
            const a = document.createElement('h3') 
            
        }


        