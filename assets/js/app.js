function tweetPublish() {
	var textTweet = document.getElementById("estado").value;	
	var tweets = document.getElementById("tweets");
	var containerTweets = document.createElement("article");
	var paragraph = document.createElement("p");
	textTweet = document.createTextNode(textTweet);
	containerTweets.appendChild(textTweet);
	tweets.appendChild(containerTweets);
}