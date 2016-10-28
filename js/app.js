$(function () {

    var nav = $('.menu');
    var home = $('ul li:first-child');
    
    home.click(function(){
        window.location.reload(true);
    });
    
    
    
    
    // SLIDER FUNCTIONS //

    var slider = $('.main-description');
    var title = $(slider).find('h1');
    var title_h2 = $(slider).find('h2');
    var title_h3 = $(slider).find('h3');
    var personImage = $('.main-person');
    var sliderWhole = $('#slider');
    
    // ARROWS at SLIDER//
    
    
    var arrows = $('.main-arrows');
    var arrow_left = $('.main-arrows').find('img').first();
    var arrow_right = $('.main-arrows').find('img').last();
    
      
    
    // GALLERY //
    
    var user = $('.gallery-wrapper');
    //console.log(user);
    
    /* user function - START -  shows clicked user on slider */
    
    user.on('click', function(){
        
        personImage.empty();
        user.removeAttr('data-visible');
       $(this).attr("data-visible", "active");
        
        var userId = $(this).attr('data-id');     // gets users ID numer
        var userName = $(this).find('h5').text();
        var userDescription = $(this).find('.gallery-user-description').text();
        var userDetails = $(this).find('.gallery-user-details').text();
        var userImage = new $('<img src="img/image'+userId+'.png" alt="persons_image">');  
        
        title.html(userName);
        title_h2.html(userDescription);
        title_h3.html(userDetails);
        
        personImage.append(userImage);
        $("html, body").animate({ scrollTop: 0 }, 600);
        
    });  /* user function - END */
    

    
    /* arrows - START - goes to next user */
    
     
    arrow_left.on('click', function(){
        

        personImage.empty();

        var activeUser = $('.gallery-wrapper[data-visible="active"]');
        var userId = activeUser.attr('data-id');   // active User index number
        var userIdPrev = userId-1;  
        var activeUserPrev = user.eq(userIdPrev-1);  // previous user to be displayed
        
        if (userIdPrev => 0) {
        activeUser.removeAttr('data-visible');
        activeUserPrev.attr("data-visible", "active");

          
        var userNamePrev = activeUserPrev.find('h5').text();
        var userDescriptionPrev = activeUserPrev.find('.gallery-user-description').text();
        var userDetailsPrev = activeUserPrev.find('.gallery-user-details').text();
        var userImagePrev = new $('<img src="img/image'+userIdPrev+'.png" alt="persons_image">');  
        
        title.html(userNamePrev);
        title_h2.html(userDescriptionPrev);
        title_h3.html(userDetailsPrev);
        
        personImage.append(userImagePrev);

        }
    }); 
    
    
    
    
    arrow_right.on('click', function(){
        
        personImage.empty();
       
        
        var activeUser = $('.gallery-wrapper[data-visible="active"]');
        var userId2 = activeUser.attr('data-id');
        var userIdNext =  parseInt(userId2)+1; 
        //console.log(userIdNext);
        var activeUserNext = user.eq(userIdNext-1);         // next user to be displayed
        
        if (userIdNext <= user.length ) {        
        activeUser.removeAttr('data-visible');
        activeUserNext.attr("data-visible", "active");
        
        var userNameNext = activeUserNext.find('h5').text();
        var userDescriptionNext = activeUserNext.find('.gallery-user-description').text();
        var userDetailsNext = activeUserNext.find('.gallery-user-details').text();
        var userImageNext = new $('<img src="img/image'+userIdNext+'.png" alt="persons_image">');  
        
        
        title.html(userNameNext);
        title_h2.html(userDescriptionNext);
        title_h3.html(userDetailsNext);
            
        personImage.append(userImageNext);
            
        } else {
          window.location.reload(true);
        }
        
         
        
    });  /* arrows - END - goes to next user */
    
    
    

    
    /* 320 + 480 media  */
    
        /* ARROWS in gallery  */
    
    var arrow_up = $('.arrow-up');
    var arrow_down = $('.arrow-down');
    
    var arrow_down_text = $('.arrow-down-text');
    var arrow_up_text = $('.arrow-up-text');
        
    
    
    arrow_down.on('click', function(){
        
        var galleryWrapper = $(this).parent().parent().find('.gallery-wrapper');
 
        galleryWrapper.css('overflow','visible');
        
        $(this).css('display','none');
        $(this).next().css('display','none');
        
        $(this).parent().find('.arrow-up').css('display','inline-block');
        $(this).parent().find('.arrow-up-text').css('display','inline-block');
        
        
    });
    
    arrow_down_text.on('click', function(){
        
        var galleryWrapper = $(this).parent().parent().find('.gallery-wrapper');
        
        galleryWrapper.css('overflow','visible');
        $(this).css('display','none');
        $(this).prev().css('display','none');
        
        $(this).parent().find('.arrow-up').css('display','inline-block');
        $(this).parent().find('.arrow-up-text').css('display','inline-block');
        
                
    });
    
    
    
    
    arrow_up.on('click', function(){
        
        var galleryWrapper = $(this).parent().parent().find('.gallery-wrapper');
 
        galleryWrapper.css('overflow','hidden');
        
        $(this).css('display','none');
        $(this).next().css('display','none');
 
        $(this).parent().find('.arrow-down').css('display','inline-block');
        $(this).parent().find('.arrow-down-text').css('display','inline-block');
        
    });
    
    arrow_up_text.on('click', function(){
        
        var galleryWrapper = $(this).parent().parent().find('.gallery-wrapper');
 
        galleryWrapper.css('overflow','hidden');
        
        $(this).css('display','none');
        $(this).prev().css('display','none');
 
        $(this).parent().find('.arrow-down').css('display','inline-block');
        $(this).parent().find('.arrow-down-text').css('display','inline-block');
        
    });
    
    
    
    
    
    
    
    /* OPEN MENU on SMALL DEVICES */
    
    

         var windowWidth = $(window).width();   
         var menu = $('nav ul');
         var button = $('.button');
        
         button.on('click', function(){
        
         menu.toggle();  })

    

    

}); /* End of global function */