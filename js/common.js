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
  

});