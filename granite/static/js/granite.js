jQuery.extend({
  getQueryParameters : function(str) {
    return (str || document.location.search)
      .replace(/(^\?)/, '')
      .split('&')
      .map(function(n){
        return n = n.split('='), this[n[0]] = n[1], this
      }.bind({}))[0];
  }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

(function($){
  $(document).ready(function(){

    var $exMenu = $('.example-menu'),
      $exNav = $exMenu.find('ul.nav'),
      $content = $('.content'),
      toggleExample = function(key){
        if(key === undefined){
          key = detectExample();
        }

        // Set the active menu item
        $exMenu.find('a.active').removeClass('active');
        $exMenu.find('a[data-example="' + key + '"]').addClass('active');

        // Display the selected examples
        $content.find('.example').css('display', 'none');
        $content.find('.example.' + key).css('display', 'block');

        // Persist over page reloads by storing the key in a cookie.
        setCookie('granite-example', key, 365);
      },
      detectExample = function(){
          var cookieEx = getCookie('granite-example'),
          urlEx = $.getQueryParameters()['example'],
          firstEx = $exMenu.find('.nav-link').first().data('example');
        return urlEx || cookieEx || firstEx;
      };

    History.Adapter.bind(window, 'statechange', function(){
        var state = History.getState();
        toggleExample(state.data.example)
    });

    // Only show the language menu if there are examples on the page...
    if($content.find('.example').length){
      $.each(GRANITE_EXAMPLES, function(idx){
        var key = GRANITE_EXAMPLES[idx][0],
          name = GRANITE_EXAMPLES[idx][1];

        // ...and only show the available examples
        if($content.find('.example.' + key).length){
          $exNav.append(
            '<li class="nav-item">' +
              '<a href="#' + key + '" class="nav-link" data-example="' + key + '">' +
                name +
              '</a>' +
            '</li>'
          )
        }
      });

      $exMenu
        .css('display', 'block')
        .find('a.nav-link').on('click', function(){
          var key = $(this).data('example');
          History.replaceState({example: key}, document.title, '?example=' + key)
          return false;
        });

      toggleExample();

      // Reposition the language menu on scroll
      $(window).scroll(function(){
        if(window.pageYOffset > $exMenu.height()){
          $exMenu.css('position', 'fixed');
          // $content.css('top', $exMenu.height())
        } else {
          $exMenu.css('position', 'absolute');
          // $content.css('top', 0)
        }
      })
    }

  })
})(jQuery);
