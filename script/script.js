function myFun(){
        var pl = setTimeout(showPage, 1000);
    }

function showPage(){
    $(".loader").hide();
}
$(document).ready(function() {
 
//    $(".fp-scroller").scroll(function () {
//            console.log("Scrolling");
//            /*set = $(document).scrollTop()+"px";*/
//            /*$('.arrowleft').animate({top:set},{duration:1000,queue:false});*/
//
//    });
    
	$('#fullpage').fullpage({
        controlArrows: false,
        scrollOverflow: true,
        keyboardScrolling: false,
        dragAndMove: false,
        setMouseWheelScrolling: false,
        normalScrollElements: true
    });
    $(".left a").click(function(){
        setTimeout(function(){
            $(".arrowright").show();
        }, 500)  
    })
    $(".arrowright").click(function(){
        $(this).hide();
        $(".modal").hide();
        $(".uxcontent").show();
        $(".conversation-outer, .diagram-outer").show();
        $(".conceptual #content > .heading, .conceptual #content > .heading-back").show();
        $.fn.fullpage.reBuild();
        $(".case-study-float").hide();

    })
    
    
    
    $('.mosaic-grid').masonry({    
        itemSelector: '.grid-item',
        columnWidth: 0
    });
    $(".right a").click(function(){
        setTimeout(function(){
            $(".arrowleft").show();
        }, 500)     
    })
    $(".arrowleft").click(function(){
        $(".arrowleft").hide();
    })
    
    $(".steps").click(function(){
        $(".case-study-float").hide();
        $(".uxcontent").hide();
        $(".conversation-outer, .diagram-outer").hide();
        $(".conceptual #content > .heading, .conceptual #content > .heading-back").hide();
        $(".modal").fadeIn();
        $(".case-study-float").show();        
        if($(window).width() < 600){
            $(".case-study-float").hide();
            $(".conversation").hide();
        }
        $.fn.fullpage.reBuild();
    });
    $(".iamintrestedBtn").click(function(){
        $(".modal").hide();
        $(".uxcontent").hide();
        $(".conversation-outer, .diagram-outer").hide();
        $(".conceptual #content > .heading, .conceptual #content > .heading-back").hide();
        $(".case-study-float").hide();
        $(".iamintrested").fadeIn();
        
        $.fn.fullpage.reBuild();
    });
    $(".iamintrested .close").click(function(){
        $(".iamintrested").hide();
        $(".heading, .heading-back").show();
        $(".uxcontent").show();
        $(".conversation, .diagram").show();
    })
    
    $(".case-study div a").click(function(){
    
    });
            
    $(".mosaic-grid img").click(function(e){
        $(".arrowleft").hide();
        $(".image-modal img").attr("src", e.target.attributes.src.nodeValue);
        var currentImg = $(this);
        $(".image-modal").fadeIn();
        
         $(".next").click(function(){
             
             $(".prev").show();
             var nextImg = currentImg.parent().next().children();   
             $(".image-modal img").attr("src", nextImg[0].src);
             $(".image-modal img").hide();
             $(".image-modal img").fadeIn();
             
             currentImg = nextImg;             
      /*       var tempbool = ($(currentImg).height() > 150);
             if(tempbool){
                 $(".image-modal-dialog").animate({
                     "top": "50px"
                 })
             }
             else{
                 $(".image-modal-dialog").animate({
                     "top": "150px"
                 })
             }
    */
             
            var tempbool = currentImg[0].src.indexOf("588") > -1 || currentImg[0].src.indexOf("500") > -1;
            console.log(tempbool);
             if(tempbool){
                 $("image-modal-dialog").css({
                     "top": "0px"
                 })
             }
                    
             
             
        });
        $(".prev").click(function(){
            $(".next").show();
             var prevImg = currentImg.parent().prev().children();         
             $(".image-modal img").attr("src", prevImg[0].src);
             $(".image-modal img").hide();
             $(".image-modal img").fadeIn();
             currentImg = prevImg;
             if(currentImg.parent().prev()[0] == undefined){
                 $(".prev").hide();
             }
             
             
        });
       
    });
    $(".close").click(function(){
        $(".image-modal").fadeOut();
        $(".arrowleft").show();
    });
 

    $.fn.fullpage.reBuild();
});
