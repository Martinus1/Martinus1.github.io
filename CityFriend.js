
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxDQUNQLGlEQURPLEVBRVAsOENBRk8sRUFHUCw2Q0FITyxFQUlQLCtDQUpPLEVBS1AsOENBTE8sRUFNUCxpREFOTyxFQU9


$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('#luxbar').removeClass('opaque');
        $('#luxbar').addClass('normal');
        $('.luxbar-item').addClass('item-color-normal');
        $('.luxbar-item').removeClass('item-color-opaque');
    } else {
        $('#luxbar').addClass('opaque');
        $('#luxbar').removeClass('normal');
        $('.luxbar-item').removeClass('item-color-normal');
        $('.luxbar-item').addClass('item-color-opaque');
    }
});


var Carousel = function() {
  var self = {};

  self.init = function() {
    var middleIndex = $(".profile").length / 2;
    setProfileActive(middleIndex);

    $(".profile-rotater").css("left", getLeft(middleIndex))
    $('.profile-rotater').css('height', $('.profile').width());

    $("#carousel-container").on("click", ".profile:not(.active)", function() {
      var newIndex = $(this).index();
      setLeft(newIndex);
    });

    $("#carousel-container").on("swipeleft", ".profile-rotater", function() {
      var rightIndex = $(".profile.active").index() + 1;
      if($(".profile")[rightIndex]) {
        setLeft(rightIndex);
      }
    });

    $("#carousel-container").on("swiperight", ".profile-rotater", function() {
      var leftIndex = $(".profile.active").index() - 1;
      if($(".profile")[leftIndex]) {
        setLeft(leftIndex);
      }
    });

    window.onresize = function() {
      $('.profile-rotater').css('height', $('.profile.active').height());

      var activeProfileIndex = $(".profile.active").index();
      $(".profile-rotater").css("left", getLeft(activeProfileIndex));
    };
  };

  var setLeft = function(newIndex) {
    $(".profile-rotater").css("left", getLeft(newIndex));
    setProfileActive(newIndex)
  };

  var getLeft = function(index){
    var halfOfSurroundingProfiles = parseInt(100 / getProfileWidthPercentage() / 2);
    return (-index + halfOfSurroundingProfiles) * getProfileWidthPercentage() + "%";
  };

  var getProfileWidthPercentage = function() {
    return getProfileWidthPx() / getParentWidth() * 100;
  };

  var getParentWidth = function() {
    return parseInt($(".profile.active").parent().css("width").replace("px", ""));
  };

  var getProfileWidthPx = function(){
    return parseInt($(".profile.active").css("width").replace("px", ""));
  };

  var setProfileActive = function(index) {
    $(".active").removeClass("active");
    $($(".profile")[index]).addClass("active");
    $($(".profile-info")[index]).addClass("active");
  };

  return self;
}();

Carousel.init();




/* smooth scrolling sections */





