(function ($)
  { "use strict"

    // ALLERT MSG
    $('#alert-message__close-btn').on('click', () => {

      $('.alert-message').addClass('active')

    })
    
    // BURGER MENU
    $('.burger__btn').on('click', () => {

      $('.nav-menu').toggle();

    })


})(jQuery);