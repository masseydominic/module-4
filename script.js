(function(){
var names = ["Yaakov", "John", "Jess", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i=0; i<names.length; i++){
	if(names[i].charAt(0)== 'J' || names[i].charAt(0)== 'j')
		byespeaker.speak(names[i]);
	else
		hellospeaker.speak(names[i]);
}
})()	