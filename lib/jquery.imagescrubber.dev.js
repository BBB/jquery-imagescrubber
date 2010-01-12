/*
 * jQuery imagescrubber Plugin
 * version: 0.1
 * URL: http://github.com/BBB/imagescrubber
 * Description: A mouse movement triggered image slideshow, based upon the jQuery javascript library.
 * Requires: jQuery 1.2.3 (Untested on anything lower; but it'll probably work)
 * Author: Ollie Relph http://bambambam.co.uk/
 */
 
(function($) {
	$.fn.imagescrubber = function(settings) {
			
		settings = $.extend({
			width: 100,
			height : 100,
			items : 'li',
			axis : 'x' // 'x' or 'y'
		}, settings || {});
		
			
		return this.each(function() {
			
			var $items = $(this).children(settings.items);		
			
			$(this).css({
				overflow : 'hidden',
				width : settings.width,
				height : settings.height			
			});
										    
			var eventaxis = settings.axis === 'y' ? 'pageY' : 'pageX';
			var offsetval = settings.axis === 'y' ? 'offsetTop' : 'offsetLeft';
			var dimension = settings.axis === 'y' ? settings.height : settings.width;
						
			$items.hide()
			$($items[0]).show()
			
			var sections = dimension / ($items.length - 1);
			var activesection = 0;
			
			$items.mousemove(function(e){
				
			    var relative = e[eventaxis] - this[offsetval];
			    
			    var cursection = Math.round(relative / sections);
			    
			    if (relative < dimension && activesection !== cursection) {
			    
			        activesection = cursection;
			        $items.hide();
			        
			        $($items[cursection]).show();
			        
			    }
			    
			});
		
		});
		
	};
})(jQuery);