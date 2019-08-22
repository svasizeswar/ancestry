/**
 *  Package Name: Ancenstry
 *  Package URI: http://www.ancestry.com/corporate
 *  Subpackage: Site related Javascripts
 *  Author: Anirudh K. Mahant
 *  Author URI: https://www.ravendevelopers.com
 *  Description: Main Javascript file.
 *  Version: 1.0
 *  License: Creative Commons 3.0 Attribution
 *  License URI: https://creativecommons.org/licenses/by/3.0/us/
 *  Tags: js
 */

(function (ancestry, undefined) {

	ancestry.mediaQuerySize = function () {
		try {
			if (
				matchMedia('(min-width : 320px) and (max-width : 480px)').matches ||
				matchMedia('(min-width : 360px) and (max-width : 640px)').matches ||
				matchMedia('(min-width : 320px) and (max-width : 980px) and (min-resolution: 1.5dppx)').matches
			) {
				return 'small';
			}
			else if (matchMedia('(min-width : 768px) and (max-width : 1024px) and (orientation: portrait)').matches) {
				return 'medium';
			}
			else if (matchMedia('(min-width : 768px) and (max-width : 1024px) and (orientation: landscape)').matches) {
				return 'medium-landscape';
			}
			else if (matchMedia('(max-width : 1025px) and (max-width : 1279px)').matches) {
				return 'medium-x';
			}
			else if (matchMedia('(max-width : 1024px) and (max-width : 1366px) and (min-resolution: 192dpi)').matches) {
				return 'ipad-pro';
			}
			else if (matchMedia('all and (min-width : 1224px)').matches) {
				return 'large';
			}
		} finally {
		}
	};

	ancestry.isJSON = function (str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	};

	// We work under ancestry namespace
	ancestry.init = function () {
		jQuery('a[rel*=external]').each(function () {
			jQuery(this).attr('target', '_blank');
		});
	};

})(window.ancestry = window.ancestry || {});

/**
 * No conflict mode
 */
(function ($) {

	$(document).ready(function () {
		ancestry.init();
		
		
		
		// Animation Scripts
		var $animation_elements = $('.article-list .views-row, .view-home-blogs-hero-section .view-content');
		var $window = $(window);

		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);

		  $.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight() + $element.outerHeight()/2;
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ( element_top_position <= window_bottom_position
			//(element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)
			) {
			  $element.addClass('in-view');
			} else {
			  $element.removeClass('in-view');
			}
		  });
		}

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
		
		
	});

})(jQuery);
