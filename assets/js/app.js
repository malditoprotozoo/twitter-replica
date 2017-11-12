// Declarando variables

var tweetButton = document.getElementById("tweet-button");
var publishButton = document.getElementById("publish-tweet");
var closeIcon = document.getElementById("close-button");
var myModal = document.getElementById("myModal");
var tweetHere = document.getElementById("tweet-here");
var tweetsSection = document.getElementById("tweets");
var spanCounter = document.getElementById("counter");
var name = document.getElementById("title-name").textContent;
var nickname = document.getElementById("nick").textContent;
var counter = Number(document.getElementById("tweet-counter").textContent);
var likes = Number(document.getElementById("likes").textContent);
var following = Number(document.getElementById("following").textContent);

// var tweetHereContent = document.getElementById("tweet-here").value;

tweetButton.addEventListener("click", function() {
    myModal.classList.toggle("invisible");
    // myModal.style.opacity = "1";
    // myModal.style.visibility = "visible";
});


closeIcon.addEventListener("click", function() {
    myModal.classList.toggle("invisible");
});

// Para que el modal se cierre cuando haga click fuera del mismo
window.onclick = function(event) {
    if (event.target == myModal) {
        myModal.classList.toggle("invisible");
    }
};

// Función que cuenta los caracteres, cambia los colores y deshabilita el botón
// Agregué trim a esta y la siguiente función para que enter no cuente como un caracter

function countChars(textbox, counter, max) {
    var count = max - tweetHere.value.trim().length;
    // El texto del contador debe ser igual al número de caracteres menos 140
    spanCounter.textContent = count;
    // Si el contador es igual o menor a cero
    if (count <= 0) {
        spanCounter.style.color = "#B90504";
    }
    // Si el contador es mayor a 0, pero menor o igual a 10
    if (count > 0 && count <= 10) {
        spanCounter.style.color = "#FA6900";
    }
    // Si el contador es mayor a 10, pero menor o igual a 20
    if (count > 10 && count <= 20) {
        spanCounter.style.color = "#FFBF00";
    }
    // Si el contador es mayor a 20
    if (count > 20) {
        spanCounter.style.color = "#1DA1F2";
    }

    // Si el contador es distinto de 140 y mayor a cero, el botón está habilitado
    if (count !== 140 && count >= 0) {
        publishButton.disabled = false;
        // En caso contrario, está deshabilitado
    } else {
        publishButton.disabled = true;
    }
}

// Hacer que la área de texto se agrande y disminuya

tweetHere.addEventListener("keydown", function() {
    setTimeout(function() {
        tweetHere.style.cssText = "height: auto;";
        tweetHere.style.cssText = "height:" + tweetHere.scrollHeight + "px";
    }, 0);
});


function tweetPublish() {
    var textTweet = tweetHere.value.trim();

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
        var nameText = document.createTextNode(name);
        var containerName = document.createElement("a");
        containerName.appendChild(nameText);
        containerTweet.insertBefore(containerName, textTag);

        containerName.classList.add("name");

        // Añadiendo el nickname
        var nicknameText = document.createTextNode(nickname);
        var containerNickname = document.createElement("span");
        containerNickname.appendChild(nicknameText);
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

        // Añadiendo ceros, en caso de que el número sea de un sólo dígito
        if (hour <= 9) {
            hour = "0" + hour.toString();
        } else {
            hour = hour.toString();
        }

        var minutes = date.getMinutes();

        if (minutes <= 9) {
            minutes = "0" + minutes.toString();
        } else {
            minutes = minutes.toString();
        }

        var seconds = date.getSeconds();

        if (seconds <= 9) {
            seconds = "0" + seconds.toString();
        } else {
            seconds = seconds.toString();
        }

        var textTime = document.createTextNode(day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds);
        var containerTime = document.createElement("span");
        containerTime.appendChild(textTime);
        containerTime.classList.add("date");

        containerTweet.insertBefore(containerTime, textTag);

        // Añadiendo la flechita hacía abajo xd

        var downContainer = document.createElement("div");
        var down = document.createElement("span");
        down.classList.add("icon-chevron-down");
        downContainer.appendChild(down);
        downContainer.classList.add("icon-down-container");
        containerTweet.insertBefore(downContainer, textTag);

        // Añadiendole un evento a la flechita :v
        // Primero creemos el menú que se verá al hacerle click

        var dropdownMenu = document.createElement("div");
        dropdownMenu.classList.add("dropdown-menu", "invisible");
        var deleteSpan = document.createElement("span");
        var deleteText = document.createTextNode("Delete Tweet");
        deleteSpan.appendChild(deleteText);
        dropdownMenu.appendChild(deleteSpan);
        downContainer.appendChild(dropdownMenu);

        down.addEventListener("click", function() {
            dropdownMenu.classList.toggle("invisible");
        });

        // Si clickeas afuera del menú, este se cerrará

        window.addEventListener("mouseup", function(event) {
            if (event.target != dropdownMenu) {
                dropdownMenu.classList.add("invisible");
            }
        });

        // Añadiendo la función para eliminar un tweet

        dropdownMenu.addEventListener("click", function() {
            tweetsSection.removeChild(containerTweet);
            counter--;
            document.getElementById("tweet-counter").innerHTML = counter;
        });

        // Añadiendo un contenedor para los íconos

        var containerIcons = document.createElement("div");
        containerIcons.classList.add("container-icons");
        containerTweet.appendChild(containerIcons);

        // Añadiendo icono de comentario
        var comment = document.createElement("span");
        comment.classList.add("icon-comment-o", "tweet-icons");
        containerIcons.appendChild(comment);

        // Añadiendo el icono de retweet
        var retweet = document.createElement("span");
        retweet.classList.add("icon-retweet", "tweet-icons");
        containerIcons.appendChild(retweet);

        // Añadiendo una función para que retweet cambie de color
        retweet.addEventListener("click", function() {
            retweet.classList.toggle("light-blue");
        });
        // Añadiendo el corazón
        var heart = document.createElement("span");
        heart.classList.add("icon-heart-o", "tweet-icons");
        containerIcons.appendChild(heart);

        // Añadiendole al corazón una función para que cuando alguien haga clic
        // Se convierta en el corazón relleno y sea de color rojo
        heart.addEventListener("click", function() {
            heart.classList.toggle("icon-heart-o");
            heart.classList.toggle("icon-heart");
            heart.classList.toggle("red");
            if (heart.classList.contains("red")) {
                likes++;
            } else {
                likes--;
            }
            document.getElementById("likes").innerHTML = likes;
        });

        // Limpiar el área luego de que el tweet se envía
        document.getElementById("tweet-here").value = "";
        // Reiniciando el contador
        spanCounter.innerHTML = 140;
        spanCounter.style.color = "#1DA1F2";
        // Haciendo desaparecer el modal
        myModal.classList.toggle("invisible");

        // Para que la área de texto vuelva a su tamaño
        tweetHere.style.cssText = "height: 80px;";

        // Para que aumente el contador de tweets
        counter++;
        document.getElementById("tweet-counter").innerHTML = counter;
    }
}

// Añadiendo la función de los botones de seguir

function follow(button) {
    button.classList.toggle("following-already");

    if (button.classList.contains("following-already")) {
        following++;
        button.innerHTML = "Following";
    } else {
        following--;
        button.innerHTML = "Follow";
    }

    document.getElementById("following").innerHTML = following;
}

function followingNow(button) {
    if (button.classList.contains("following-already")) {
        button.innerHTML = "Following";
    }
}

function unfollow(button) {
    if (button.classList.contains("following-already")) {
        button.innerHTML = "Unfollow";
    }
}