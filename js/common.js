$(function() {
  const $rcm_imagesets = $("#recommen .slider .imagesets");
  const $rcm_locations = $("#recommen .locations ul");
  const $gnb_mainMenu = $("#gnb .mainMenu");
  let num_sliderIndex = 0;
  let slideRotation;
  let bln_ongoingRotaion = false;


  // header navi
  $("li", $gnb_mainMenu).mouseover(function() {
    $(".submenu").stop().slideDown(300);
    $(".top").css({
      'height':'240px'
    })
  }).mouseleave(function() {
    $(".submenu").stop().slideUp(300);
    $(".top").css({
      'height':'90px'
    })
  })

  
  // recommen slider
  slideRotation= setInterval(() => {
    if(bln_ongoingRotaion == false) {
      $rcm_imagesets.animate({
        'marginLeft':'-675px'
      }, function() {
        $(".image:first", this).appendTo(this);
        $(this).css({ 'marginLeft':'0' });
  
        // tracking location
        num_sliderIndex = (++num_sliderIndex) % $rcm_locations.children().length;
        $rcm_locations.children("li:eq("+num_sliderIndex+")").addClass("active")
        .siblings().removeClass("active");
      })
    }
  }, 3000);
  setInterval(() => {
    if(bln_ongoingRotaion == true) bln_ongoingRotaion = false;
  }, 2000);

  $(".arrows .next").click(function() {
    // clearInterval(slideRotation);
    bln_ongoingRotaion = true;
    $rcm_imagesets.stop().animate({
      'marginLeft':'-675px'
    }, function() {
      $(".image:first", this).appendTo(this);
      $(this).css({ 'marginLeft':'0' });

      // tracking location
      num_sliderIndex = (++num_sliderIndex) % $rcm_locations.children().length;
      $rcm_locations.children("li:eq("+num_sliderIndex+")").addClass("active")
      .siblings().removeClass("active");
    })
  });
  $(".arrows .prev").click(function() {
    // clearInterval(slideRotation);
    bln_ongoingRotaion = true;
    num_sliderIndex == 0 ? num_sliderIndex = $rcm_locations.children().length-1 : num_sliderIndex--;
    // console.log(num_sliderIndex)
    $rcm_imagesets.animate({
      'marginLeft':(-675)*num_sliderIndex+"px"
    })
    $rcm_locations.children("li:eq("+num_sliderIndex+")").addClass("active")
      .siblings().removeClass("active");
  })

});