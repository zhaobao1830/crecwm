$(function(){
	
	var ts = new Date(2012, 0, 1),
		  newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 24*60*60*1000;
		newYear = false;
	}
		
	$('#kbCountDownContent').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
		}
	});
	
});
