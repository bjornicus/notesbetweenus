var path = location.pathname.substring(1);

if (path === ''){
	path = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
	location.pathname = path;	
}
var messageData = new Firebase('https://sweltering-fire-5125.firebaseio.com').child(path);
var messageElement = document.getElementById('message');
var inputElement = document.getElementById('message');

messageData.on("value", function (snapshot) { 
	messageElement.innerText = snapshot.val();
});

inputElement.onkeypress = function (e) {
    if (e.keyCode == 13) {
      messageData.set(inputElement.innerText);
    }
}