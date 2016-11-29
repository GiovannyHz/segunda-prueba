/*Slider Principal*/
$(document).ready(function(){
  $('#slider img:gt(0)').hide();
    setInterval(function(){
      $('#slider img:first-child').fadeOut(4000)
        .next('#slider img').fadeIn('slow')
        .end().appendTo('#slider');

    },4500);

});

/*Slider de los Eventos*/
$(function(){
  $("#slideShow").slidesjs({
    height:260,
    navigation: {
      active:false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
    pagination: {
      active: false,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
    play: {
      active: false,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 7000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 7000
        // [number] restart delay on inactive slideshow
    }
  });
});
