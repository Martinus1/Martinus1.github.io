(function() {
  var images;

  images = ["file:///Users/martin_michalko/Downloads/Vy%CC%81ber-upravene%CC%81/photorande-15.jpg", "file:///Users/martin_michalko/Downloads/Vy%CC%81ber-upravene%CC%81/f2bca44a2572d3fb2418840618de855564890c9b.jpg", "file:///Users/martin_michalko/Downloads/Vy%CC%81ber-upravene%CC%81/be256f672482e1e3779961cee3c2c7ad4b542190.jpg", "file:///Users/martin_michalko/Downloads/Vy%CC%81ber-upravene%CC%81/adventures-by-disney-europe-danube-river-cruise-itinerary-day-06-top-bratislava-city-tour.jpg", "file:///Users/martin_michalko/Downloads/Vy%CC%81ber-upravene%CC%81/2878563_1200x.jpg", "file:///Users/martin_michalko/Downloads/Vy%CC%81ber-upravene%CC%81/1875eef2718ff9dd658012ec0e5a577326ce0bb0.jpg"];

  $('div.card-image').each(function() {
    var random_image_index;
    random_image_index = Math.floor(images.length * Math.random());
    return $(this).css('background-image', 'url(' + images[random_image_index] + ')');
  });

}).call(this);

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





