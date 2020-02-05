/*	$(window).scroll(function () {
 			if ($(this).scrollTop() > 150) {
 				$('.t_header_1').addClass('min');
 			} else {
 				$('.t_header_1').removeClass('min');
 			}
 		});
        
	if ($(window).width() >= 1200) {
 		$(window).scroll(function () {
 			if ($(this).scrollTop() > 150) {
 				$('.t_header_1').addClass('min');
 			} else {
 				$('.t_header_1').removeClass('min');
 			}
 		});
 	}


$(document).ready(function() {
$(".btn-open_meny").click(function (){               
    if($(this).hasClass('active')){
        $(this).removeClass("active");
        $('.l_web_column_101247').fadeOut()
         
    }else{
       $(this).addClass("active"); 
       $('.l_web_column_101247').fadeIn()
    }       
});
*/
//  youtube player-script start
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // IE8 support
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Based on the YouTube ID, we can easily find the thumbnail image
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        // Overlay the Play icon to make it look like a video player
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            // Create an iFrame with autoplay set to true
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // The height and width of the iFrame should be the same as parent
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;

            // Replace the YouTube thumbnail with YouTube Player
            this.parentNode.replaceChild(iframe, this);
        }
    }
});
//  youtube player-script start

$(document).ready(function() {
    $("a.page-nav").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
    });
});
        
$(document).ready(function() {
    
 
 	
 

    
    
    function closeHeaderBlock(){
        $('#navigation').removeClass("active");
        $('#main-menu-ection').removeClass("active");
        $('header').removeClass("m__open");
        $('body').removeClass("fix"); 
          
       // $('#language-ection').removeClass("active");  
       // $('#search-ection').removeClass("active");       
    }
    $("#language-ection").click(function (){  
        closeHeaderBlock();
        $('#search-ection').removeClass("active");     
        if($(this).hasClass('active')){
            $(this).removeClass("active");
             
        }else{
           $(this).addClass("active"); 
        }       
    });
    $("#search-ection").click(function (){ 
        closeHeaderBlock();  
        $('#language-ection').removeClass("active");    
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            
        }else{
           $(this).addClass("active"); 
        }       
    });
    $("#main-menu-ection").click(function (){
        $('#language-ection').removeClass("active");  
        $('#search-ection').removeClass("active");  
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            closeHeaderBlock();     
        }else{
           $(this).addClass("active");
           $('#navigation').addClass("active");  
           $('header').addClass("m__open"); 
           $('body').addClass("fix");           
        }       
    });
    
    
    
});
    

$(document).ready(function() {
    $('.front-slick').slick({
        dots: true,       
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    }); // front-slick 
    $('.slider_bottom-slick').slick({
        dots: false,       
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }); // slider_bottom-slick 
    
    
    $('.page-slick').slick({
        dots: false,
       centerMode: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }        
        ]
    }); // page-slick 
    
    $('.uber_uns_slider-slick').slick({
        dots: false,
       centerMode: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }        
        ]
    }); // page-slick 
    
});

