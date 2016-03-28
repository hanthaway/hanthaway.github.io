(function($) {

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });
    var oList=document.getElementById('list');
    var aBtn=document.getElementById('list_btn').children;
    for (var i = 0; i < 6; i++) {
    	var oDiv=document.createElement('div');
    	oDiv.className="col-md-4 col-sm-6 col-xs-12";
    	oDiv.innerHTML='<div class="project-item">\
                                            <img src="images/'+(i+1)+'.jpg" alt="">\
                                            <div class="project-hover">\
                                                <h4>Great Nature Capture</h4>\
                                            </div>\
                                        </div>';
         oList.appendChild(oDiv);
    };
    var aPos=[];
    var aLi=oList.children;
	// for(var i=0;i<aLi.length;i++){
	// 	aPos.push({
	// 		left:aLi[i].offsetLeft,
	// 		top:aLi[i].offsetTop,
	// 		width:aLi[i].offsetWidth,
	// 		height:aLi[i].offsetHeight,
	// 		opacity:1
	// 		});	
	// 	aLi[i].style.left=aPos[i].left+'px';
	// 	aLi[i].style.top=aPos[i].top+'px';
	// }
	// for(var i=0;i<aLi.length;i++){
	// 	aLi[i].style.position='absolute';	
	// 	aLi[i].style.margin=0;
	// }
    for (var i = 0; i < aBtn.length; i++) {
    	aBtn[i].onclick=function(){
    		alert();
    	}
    };


})(jQuery);