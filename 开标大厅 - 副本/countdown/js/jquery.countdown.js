/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){
	
	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// Creating the plugin
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, h, m, s, positions;

		// Initialize the plugin
		init(this, options);
		
		positions = this.find('.countPos');
		
		(function tick(){
			
			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// Number of days left
			// d = Math.floor(left / days);
			// updateDuo(0, 1, d);
			// left -= d*days;
			
			// Number of hours left
			h = Math.floor(left / hours);
			updateDuo(0, 1, h);
			left -= h*hours;
			
			// Number of minutes left
			m = Math.floor(left / minutes);
			updateDuo(2, 3, m);
			left -= m*minutes;
			
			// Number of seconds left
			s = left;
			updateDuo(4, 5, s);
			
			// Calling an optional user supplied callback
			options.callback(h, m, s);
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();
		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('kbCcountdownHolder');

		// Creating the markup inside the container
		$.each(['Hours','Minutes','Seconds'],function(i){
			$('<div class="count'+this+'">').html(
				'<div class="countPos">\
					<span class="digit static">0</span>\
				</div>\
				<div class="countPos">\
					<span class="digit static">0</span>\
				</div>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<div class="countDiv countDiv'+i+'"></div>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-170px',
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'170px',opacity:0},'slow',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'slow',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);