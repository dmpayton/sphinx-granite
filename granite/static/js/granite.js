(function($){
  $(document).ready(function(){
    var $langMenu = $('.language-menu'),
      $langNav = $langMenu.find('ul.nav'),
      $content = $('.content'),
      toggleLanguage = function(key){
        // Set the active menu item
        $langMenu.find('a.active').removeClass('active');
        $langMenu.find('a[data-language="' + key + '"]').addClass('active');

        // Display the selected examples
        $content.find('.example .language').css('display', 'none');
        $content.find('.example .language.' + key).css('display', 'block');
      };

    // Only show the language menu if there are examples on the page...
    if($content.find('.example .language').length){
      $.each(GRANITE_LANGUAGES, function(idx){
        var key = GRANITE_LANGUAGES[idx][0],
          name = GRANITE_LANGUAGES[idx][1];

        // ...and only show the avilable examples
        if($content.find('.example .language.' + key).length){
          $langNav.append(
            '<li class="nav-item">' +
              '<a href="#' + key + '" class="nav-link" data-language="' + key + '">' +
                name +
              '</a>' +
            '</li>'
          )
        }
      });

      $langMenu
        .css('display', 'block')
        .find('a.nav-link').on('click', function(){
          toggleLanguage($(this).data('language'));
          return false;
        });

      toggleLanguage($langMenu.find('.nav-link').first().data('language'));

      // Reposition the language menu on scroll
      $(window).scroll(function(){
        if(window.pageYOffset > $langMenu.height()){
          $langMenu.css('position', 'fixed');
          // $content.css('top', $langMenu.height())
        } else {
          $langMenu.css('position', 'absolute');
          // $content.css('top', 0)
        }
      })
    }

  })
})(jQuery);
