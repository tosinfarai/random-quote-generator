function randomQuote(){
  //var quotes = 'abcdefghijklmnopqrstuvwxyz';
  var quotes = ["Create a Positive Environment", "Celebrate Your Small Wins",
              "Surround Yourself With Motivated People",
              "The secret of getting ahead is getting started",
              "It’s hard to beat a person who never gives up",
              "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE",
              "Happiness is not something ready made. It comes from your own actions"];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").value = quote;
}
