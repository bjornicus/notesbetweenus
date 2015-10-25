var messageData = new Firebase('https://sweltering-fire-5125.firebaseio.com').child(location.pathname.substring(1));
var messageElement = document.getElementById('message');
var inputElement = document.getElementById('messageInput');

messageData.on("value", function (snapshot) { 
	messageElement.innerText = snapshot.val();
});

inputElement.onkeypress = function (e) {
    if (e.keyCode == 13) {
      messageData.set(inputElement.value);
    }
}