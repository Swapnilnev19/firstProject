$(document).ready(function() {
            $('.counternum').rCounter({
               time: 1500
            });
			
		$('.loca_list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

           ]
	});
	
	$('.history_niwas_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

           ]
	});
	
	$('.festivals_list').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

           ]
	});
	
	
			
	$('.benifits_slider_right').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 2280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
						arrows: true,
                        infinite: true,
                        dots: false
                    }
                },{
                    breakpoint: 1980,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

           ]
	});
	
	$('.benifits_slider_left').slick({
		slidesToShow: 5,
		slidesToScroll: -1,
		infinite: false,
		autoplay:true,
		arrows: true,
		cssEase: 'linear',
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 2280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: -1,
						arrows: true,
                        infinite: false,
                        dots: false
                    }
                },{
                    breakpoint: 1980,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: -1,
                        infinite: false,
                        dots: false
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

           ]
	});
	
	$('.client_sec_list').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }

           ]
		   
		   
	});
			
			
			$('.slider-for').slick({

           slidesToShow: 1,
			autoplay:true,
           slidesToScroll: 1,

           arrows: false,

           fade: true,
		   
		   dots: true,

           infinite:false,

         });

         $('.slider-nav').slick({

           slidesToShow: 1,
			autoplay:true,
           slidesToScroll: 1,
		   
		   arrows: false,

           dots: true,

           infinite:false,

           focusOnSelect: true,

            responsive: [

               {

                  breakpoint: 750,

                  settings: {

                     slidesToShow: 3,

                     slidesToScroll: 1,

                     pauseOnHover:false,

                     autoplay: true,

                     autoplaySpeed: 3000,

                  }

               },

            ]

         });
		 
		 $('.benifits_cont_slider_left').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay:true,
		arrows: true,
		autoplaySpeed: 4000,
		dots:false,
		 responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

           ]
	});
			
			$('.srch_btn2').click(function(){
				$(this).toggleClass('open');
				$('body').toggleClass('open_scroll');
				$('.main_nav').toggleClass('show-srchbar');
				$('.menu-overly-srch').toggle();
			});
			
			$('.menu-overly-srch').click(function(){
				$(this).toggle();
				$('body').toggleClass('open_scroll');
				$('.srch_btn2').toggleClass('open');
				$('.main_nav').toggleClass('show-srchbar');
			});
			
			$('.main_nav >ul >li').has('ul').addClass('has-submenu').append( '<span class="sub-toggle"></span>' );
	
			$('.sub-toggle').on('click',function(){
				$(this).toggleClass('expanded');
				$(this).parent('li').toggleClass('expanded');
				$(this).parent('li').find('.sub-menu').slideToggle();
				$(this).parent('li').siblings('li').find('> .sub-toggle').removeClass('expanded');
				$(this).parent('li').siblings('li').find('.sub-menu').slideUp();
			});
			
			
			
        });
		
		$(window).load(function() {
		   $('.preloader').fadeOut('slow');
		});
		
		