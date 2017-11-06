function tweetPublish() {
    // Tomar texto ingresado
    var textTweet = document.getElementById("estado").value;

    if (textTweet.length == 0 || textTweet == null) {
        alert("Debes ingresar un mensaje");
        return false;
    } else {
        // Limpiar el área luego de que el tweet se envía
        document.getElementById("estado").value = "";

        var tweets = document.getElementById("tweets");
        var containerTweets = document.createElement("article");
        var paragraph = document.createElement("p");
        textTweet = document.createTextNode(textTweet);
        containerTweets.appendChild(textTweet);
        tweets.appendChild(containerTweets);
    }

};

function countChars(textbox, counter, max) {
    var count = max - document.getElementById(textbox).value.length;
    if (count < 0) {
        document.getElementById(counter).innerHTML = "<span style=\"color: red;\">" + count + "</span>";
    } else {
        document.getElementById(counter).innerHTML = count;
    }
};