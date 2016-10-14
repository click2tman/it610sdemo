(function($) {
	"use strict";
	
		$(document).ready(function() {
		
		/*-----------------------------------------------------------------------------------*/
		/*  Home icon in main menu
		/*-----------------------------------------------------------------------------------*/ 
			$('.main-navigation .menu-item-home a').prepend('<i class="fa fa-home spaceRight"></i>');
			
		/*-----------------------------------------------------------------------------------*/
		/*  If the Tagcloud widget exist or Edit Comments Link exist
		/*-----------------------------------------------------------------------------------*/ 
			if ( $( '.comment-metadata' ).length ) {
				$('.comment-metadata').addClass('smallPart');
			}
			if ( $( '.reply' ).length ) {
				$('.reply').addClass('smallPart');
			}
			
		/*-----------------------------------------------------------------------------------*/
		/*  Search button
		/*-----------------------------------------------------------------------------------*/ 
			$('#open-search').click(function() {
				$('#search-full').fadeIn(400);
				if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				} else {
					$("#search-full .search-field").focus();
				}
			});

			$('#close-search').click(function() {
				$('#search-full').fadeOut(400);
			});
			
		/*-----------------------------------------------------------------------------------*/
		/*  Mobile Menu
		/*-----------------------------------------------------------------------------------*/ 
			if ($( window ).width() < 1025) {
				$('.main-navigation').find("li").each(function(){
					if($(this).children("ul").length > 0){
						$(this).append("<span class='indicator'></span>");
					}
				});
				$('.main-navigation ul > li.menu-item-has-children .indicator, .main-navigation ul > li.page_item_has_children .indicator').click(function() {
					$(this).parent().find('> ul.sub-menu, > ul.children').toggleClass('yesOpen');
					$(this).toggleClass('yesOpen');
					var $self = $(this).parent();
					if($self.find('> ul.sub-menu, > ul.children').hasClass('yesOpen')) {
						$self.find('> ul.sub-menu, > ul.children').slideDown(300);
					} else {
						$self.find('> ul.sub-menu, > ul.children').slideUp(200);
					}
				});
			}
			
			$(window).resize(function() {
				if ($( window ).width() > 1025) {
					$('.main-navigation ul > li.menu-item-has-children, .main-navigation ul > li.page_item_has_children').find('> ul.sub-menu, > ul.children').slideDown(300);
				}
			});
		
		/*-----------------------------------------------------------------------------------*/
		/*  Detect Mobile Browser
		/*-----------------------------------------------------------------------------------*/ 
			if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else {
				
				/*-----------------------------------------------------------------------------------*/
				/*  Scroll To Top
				/*-----------------------------------------------------------------------------------*/ 
					$(window).scroll(function(){
						if ($(this).scrollTop() > 700) {
							$('#toTop').fadeIn();
						} 
						else {
							$('#toTop').fadeOut();
						}
					}); 
					$('#toTop').click(function(){
						$("html, body").animate({ scrollTop: 0 }, 1000);
						return false;
					});

			}
		
		});
	
})(jQuery);