document.addEventListener("DOMContentLoaded", () => {
  const quoteEl = document.getElementById("quote");
  const btn = document.getElementById("getQuote");

  const messages = [
    "I love you sooooo much baby🍅",
    "Baabu I miss you so much ❤️",
    "Babu Aap kaise ho 💞????",
    "baby j1???",
    "Baby Aapko pata hai aaj kiya huwa 🙃???",
    "Sweetheart ❤️ kidher ho??",
    "baby I miss your kiyaa karrahe Sweetheart❤️ ?",
    "I love you more than words can say ❤️",
    "You are always in my heart 💖",
    "Every moment with you is special 💕",
    "You are my sunshine ☀️",
    "Forever and always You my love 💍",
    "Baabu guess what abhi mai aapko hi yad karrahi thi😍",
    "Baabu Aaj aap mere dream me aaye the ✨",
    "My love for you grows every day 🌹",
    "You make my world brighter",
    "Baabu aap kub Aarahe...✈️"
  ];

  let lastIndex = -1;

  function showRandomMessage() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * messages.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
   quoteEl.innerText = messages[randomIndex];

  }

  
  showRandomMessage();

  btn.addEventListener("click", showRandomMessage);
});
