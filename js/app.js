$(document).ready(function(){

	var cl = function(target){
		console.log(target)
	}

	var mobileMenu = function(){
		var button = $('.hamb-button');
		var navBar = $('.nav-bar');
		var navFirstLink = $('.main-item');
		var navSecondLink = $('.sub-menu--title');

		button.click(function(){
			var $this = $(this);
			if($this.hasClass('open-menu')){
				$this.removeClass('open-menu');
				navBar.removeClass('open-navbar').slideUp(250);
			}else{
				$this.addClass('open-menu');				
				navBar.addClass('open-navbar').slideDown(250);
			}
		});
		navFirstLink.each(function(){
			$(this).click(function(){
				var subSubMenu = $(this).next('.sub-menu');
				if(subSubMenu.hasClass('open-submenu')){
					subSubMenu.removeClass('open-submenu').slideUp(250);
				}else{
					subSubMenu.addClass('open-submenu').slideDown(250);					
				}
			});
		});
		navSecondLink.each(function(){
			$(this).click(function(){
				var subSubMenu = $(this).next('ul');
				if(subSubMenu.hasClass('open-subsubmenu')){
					subSubMenu.removeClass('open-subsubmenu').slideUp(250);
				}else{
					subSubMenu.addClass('open-subsubmenu').slideDown(250);					
				}
			});
		});
	}

	if($(window).width() <= 1199){
		mobileMenu();
	}

	$('.footer a, .ariane a, .sub-menu a').each(function(){
		var thisTitle = $(this).text();
		$(this).attr('title', thisTitle);
	});

	$('.similar-products--item').each(function(){
		var thisText = $(this).children('.similar-title').text();
		$(this).attr('title',thisText);
	});

	var showNotes = function(){
		var noteButton = $('.product-notes--button');
		noteButton.click(function(){
			if($(this).hasClass('show-notes')){
				$(this).removeClass('show-notes');
				$('.product-notes').slideUp(250);
			}else{
				$(this).addClass('show-notes');
				$('.product-notes').slideDown(250);				
			}
		});
	}();

	var tabsManagement = function(){
		var tabs = document.querySelectorAll('.tabs-header');
		var tabsContent = document.querySelectorAll('.tabs');

		for(var i = 0; i < tabs.length; i++){
			$(tabs[i]).attr('data-header', i);
			$(tabsContent[i]).attr('data-tab', i);
		}

		$('.tabs-header').each(function(){
				$(this).click(function(){
					if($(this).hasClass('tab-active')){
						return;
					}else{
						$('.tabs-header').removeClass('tab-active');
						$(this).addClass('tab-active');
						var tabToken = $(this).attr('data-header');
						$('.tabs').each(function(){
							if($(this).attr('data-tab') == tabToken){
								$('.tabs').hide(50).removeClass('tab-open');
								$(this).show(50).addClass('tab-open');
							}
						});
					}
				});
			});

	}();

	var ariane = function(){
		$('.ariane a').each(function(){
			$(this).after('<span>></span>')
		});
	}();

	$('.cookies-info a').click(function(e){
		e.preventDefault();
		$('.cookies-info').addClass('cookies-ok')
	});

	$('.search input').focus(function(){
		$(this).parent('.search').addClass('focus-input');
		$(this).prev('label').addClass('label-small');
		$(this).prev('label').text('Votre recherche :');
	});

	$('.search input').blur(function(){
		if($(this).val() != ''){
			return
		}else{
			$(this).parent('.search').removeClass('focus-input');
			$(this).prev('label').removeClass('label-small');
			$(this).prev('label').text('Je recherche un produit, une marque, etc');
		}
	});

});// end jQuery