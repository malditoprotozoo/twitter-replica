// Declarando variables

var tweetButton = document.getElementById("tweet-button");
var publishButton = document.getElementById("publish-tweet");
var closeIcon = document.getElementById("close-button");
var myModal = document.getElementById("myModal");
var tweetHere = document.getElementById("tweet-here");
var tweetsSection = document.getElementById("tweets");
var spanCounter = document.getElementById("counter");

// var tweetHereContent = document.getElementById("tweet-here").value;

tweetButton.addEventListener("click", function() {
        myModal.style.display = "block";
});


closeIcon.addEventListener("click", function() {
        myModal.style.display = "none";
});

// Para que el modal se cierre cuando haga click fuera del mismo
window.onclick = function(event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
};

// Función que cuenta los caracteres, cambia los colores y deshabilita el botón

function countChars(textbox, counter, max) {
    var count = max - tweetHere.value.length;
    // El texto del contador debe ser igual al número de caracteres menos 140
    spanCounter.textContent = count;
    // Si el contador es igual o menor a cero
    if (count <= 0) {
        spanCounter.style.color = "#B90504";
    };
    // Si el contador es mayor a 0, pero menor o igual a 10
    if (count > 0 && count <= 10) {
        spanCounter.style.color = "#FA6900";
    };
    // Si el contador es mayor a 10, pero menor o igual a 20
    if (count > 10 && count <= 20) {
        spanCounter.style.color = "#FFBF00";
    };
    // Si el contador es mayor a 20
    if (count > 20) {
        spanCounter.style.color = "#008E09";
    };

    // Si el contador es distinto de 140 y mayor a cero, el botón está habilitado
    if (count !== 140 && count >= 0) {
        publishButton.disabled = false;
    // En caso contrario, está deshabilitado
    } else {
        publishButton.disabled = true;
    };

    if (tweetHere.scrollTop != 0) {
        tweetHere.style.height = tweetHere.scrollHeight + "px";
    }
};

function tweetPublish() {
    var textTweet = tweetHere.value;

    if (textTweet.length !== 0) {
        var containerTweet = document.createElement("div");
        var textTag = document.createElement("span");
        textTweet = document.createTextNode(textTweet);
        textTag.appendChild(textTweet);
        containerTweet.appendChild(textTag);
        tweetsSection.insertBefore(containerTweet, tweetsSection.children[0]);

        textTag.classList.add("tweetItself");
        containerTweet.classList.add("tweeted");

        // Añadiendo el nombre
        var name = document.createTextNode("Tori Rodríguez");
        var containerName = document.createElement("span");
        containerName.appendChild(name);
        containerTweet.insertBefore(containerName, textTag);

        containerName.classList.add("name");

        // Añadiendo el nickname
        var nickname = document.createTextNode("@virodriguezfe");
        var containerNickname = document.createElement("span");
        containerNickname.appendChild(nickname);
        containerTweet.insertBefore(containerNickname, textTag);

        containerNickname.classList.add("nickname");

        // Añadiendo la foto de perfil

        var profilePicture = document.createElement("img");
        profilePicture.setAttribute("src", "assets/images/profile-medieval-pic.png");
        profilePicture.classList.add("profile-pic-in-tweet");
        containerTweet.insertBefore(profilePicture, containerName);

        // Determinando y añadiendo la fecha
        var date = new Date();
        var day = date.getDate().toString();
        var month = date.getMonth().toString();
        var year = date.getFullYear().toString();
        
        var hour = date.getHours();

        if (hour <= 9) {
            hour = "0" + hour.toString();
        } else {
            hour = hour.toString();
        };

        var minutes = date.getMinutes();

        if (minutes <= 9) {
            minutes = "0" + minutes.toString();
        } else {
            minutes = minutes.toString();
        };

        var seconds = date.getSeconds();

        if (seconds <= 9) {
            seconds = "0" + seconds.toString();
        } else {
            seconds = seconds.toString();
        };

        var textTime = document.createTextNode(day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds);
        var containerTime = document.createElement("span");
        containerTime.appendChild(textTime);
        containerTime.classList.add("date");

        containerTweet.insertBefore(containerTime, textTag);

        var containerNickname = document.createElement("span");
        // Limpiar el área luego de que el tweet se envía
        document.getElementById("tweet-here").value = "";
        myModal.style.display = "none";
    };
};
