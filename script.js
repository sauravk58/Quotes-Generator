let quote=document.getElementById('quote');
let author=document.getElementById('author');

const api_url="https://api.quotable.io/random";

async function getquote() {
    try {
      const response = await fetch(api_url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"----by "+author.innerHTML,"Tweet Window")
  }