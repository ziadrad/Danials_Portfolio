//  writing effect
var app = document.getElementById('writing');
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 30,
  deleteSpeed: 20,
  
});
typewriter
  .typeString('Larry Danials')
  .changeDeleteSpeed(30)
  .pauseFor(500)
  .deleteChars(15)

  .typeString('Developer')
  .pauseFor(500)
  .deleteChars(15)

  .typeString('Designer')
  .pauseFor(500)
  .deleteChars(15)
  .pauseFor(1000)
  .start();


//   <!-- counter effect  -->


    
   (function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 100,           // how long it should take to count between the target numbers
		refreshInterval: 10,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering

	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

    jQuery(function ($) {
     let condition_upper , condition_lower;
      // start all the timers
      $('.timer').each(count);
        
      // restart a timer when a button is clicked
      $( window ).scroll(function () {
        condition_lower = $('#Clients')[0].offsetTop;
        condition_upper = $('#Team')[0].offsetTop; 
    if($(window).scrollTop() == condition_lower || $(window).scrollTop() == condition_upper)
    {
       $('.timer').each(count);
     }
      });
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });

    // <!-- portfolio filter effect -->
  
  !function(d){
  var c="portfilter";
  var b=function(e)
  {this.$element=d(e);this.stuff=d("[data-tag]");
  this.target=this.$element.data("target")||""};
  b.prototype.filter=function(g)
  {var e=[],f=this.target;this.stuff.fadeOut("fast").promise().done(function(){d(this).each(function(){if(d(this).data("tag")==f||f=="all"){e.push(this)}});d(e).show()})};
  var a=d.fn[c];
  d.fn[c]=function(e){return this.each(
  function(){var g=d(this),f=g.data(c);if(!f){g.data(c,(f=new b(this)))}if(e=="filter"){f.filter()}})};
  d.fn[c].defaults={};
  d.fn[c].Constructor=b;
  d.fn[c].noConflict=function()
  {d.fn[c]=a;return this};d(document).on("click.portfilter.data-api","[data-toggle^=portfilter]",
  function(f){d(this).portfilter("filter")})}(window.jQuery);
  
//   btn active
  $(function(){
    var $h3s = $('.btn').click(function(){
        $h3s.removeClass('active');
        $(this).addClass('active');
    });
});
if($(window).scrollTop() < $('#ABOUT')[0].offsetTop )
    {
        $('#nav').addClass('transparent')
      $('.navbar-brand').eq(0).addClass('text-white')
       $('.nav-item ')
       for (let i = 0; i < $('.nav-item ').length; i++) {
     $(".nav-link").eq(i).addClass('text-white')
    }
     }

$( window ).scroll(function () {
    if($(window).scrollTop() > $('#ABOUT')[0].offsetTop )
        {
            $('#nav').addClass('bg-white')
            $('.navbar-brand').eq(0).removeClass('text-white')
          $('.navbar-brand').eq(0).addClass('text-dark')
           $('.nav-item ')
           for (let i = 0; i < $('.nav-item ').length; i++) {
            $(".nav-link").eq(i).removeClass('text-white')
         $(".nav-link").eq(i).addClass('text-dark')
         
        }
         }else{
            $('#nav').removeClass('bg-white')
            $('#nav').addClass('transparent')

            $('.navbar-brand').eq(0).removeClass('text-dark')
          $('.navbar-brand').eq(0).addClass('text-white')
           $('.nav-item ')
           for (let i = 0; i < $('.nav-item ').length; i++) {
            $(".nav-link").eq(i).removeClass('text-dark')
         $(".nav-link").eq(i).addClass('text-white')
         
        }
         }
  });