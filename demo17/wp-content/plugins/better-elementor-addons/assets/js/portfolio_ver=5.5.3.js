(function($) {
    "use strict";


        $('.better.portfolio .item').on('mouseenter', function () {
            var tab_id = $(this).attr('data-tab');
            $('.portfolio .item').removeClass('current');
            $(this).addClass('current');

            $('.glry-img .tab-img').removeClass('current');
            $("#" + tab_id).addClass('current'); 

            if ($(this).hasClass('current')) {
                return false;
               }
        }); 
 
 
})(jQuery);