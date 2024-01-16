window.onload = function()
{
    getRandomQuotationsReady();
}
function getRandomQuotationsReady()
{
    var btn = document.getElementById("btn");
    btn.onclick = function()
    {
        var randomQuotesArray = [
            "Women are made to be loved, not understood.",
            "Be the change that you wish you to see.",
            "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            "No one can make you feel inferior without your consent.",
            "Peace begin with a smile.",
            "If you are going through hell, keep going.",
            "Injustice anywhere is a threat to justice everywhere.",
            "Do one thing every day that scares you.",
            "The time is always right to do what is right.",
            "True friends stabs you in the front."
    ];
    var randomQuote = document.getElementById("randomQuote");
    var rand = Math.floor(Math.random()*10);
    randomQuote.textContent = randomQuotesArray[rand];
    }
}