$(document).ready(function(){
  //スクロールのためのjquery
  var about = $('#about').offset().top;
  var schedule = $('#schedule').offset().top;
  var chara = $('#chara').offset().top;
  $('.top-btn').click(function() {
      $('html, body').animate({scrollTop:about});
  });
  $('.about-btn').click(function() {
      $('html, body').animate({scrollTop:about});
  });
  $('.schedule-btn').click(function() {
      $('html, body').animate({scrollTop:schedule});
  });
  $('.chara-btn').click(function() {
      $('html, body').animate({scrollTop:chara});
  });

  //モーダルの表示
  $('#switch').click(function(){
    $('.hidden-index').fadeToggle();
  });

  $(document).on('click touchend', function(event) {
      if (!$(event.target).closest('#switch').length) {
        $('.hidden-index').fadeOut();
      }
  });

  //画像全画面表示のモーダル

  $('.pic0').click(function(){
    $('.full0').fadeIn();
  });
  $('.pic00').click(function(){
    $('.full00').fadeIn();
  });
  $('.pic1').click(function(){
    $('.full1').fadeIn();
  });
  $('.pic2').click(function(){
    $('.full2').fadeIn();
  });
  $('.pic3').click(function(){
    $('.full3').fadeIn();
  });
  $('.pic4').click(function(){
    $('.full4').fadeIn();
  });
  $('.pic5').click(function(){
    $('.full5').fadeIn();
  });
  $('.pic6').click(function(){
    $('.full6').fadeIn();
  });
  $('.pic7').click(function(){
    $('.full7').fadeIn();
  });
  $('.pic8').click(function(){
    $('.full8').fadeIn();
  });
  $('.pic9').click(function(){
    $('.full9').fadeIn();
  });
  $('.pic10').click(function(){
    $('.full10').fadeIn();
  });
  $('.pic11').click(function(){
    $('.full11').fadeIn();
  });
  $('.pic12').click(function(){
    $('.full12').fadeIn();
  });
  $('.pic13').click(function(){
    $('.full13').fadeIn();
  });
  $('.close-btn').click(function(){
    $('.full-pic-container').fadeOut();
  });

  $(document).on('click touchend', function(event) {
      if (!$(event.target).closest('.enja-pic,.full-pic').length) {
        $('.full-pic-container').fadeOut();
      }
  });


  //アコーディオンの動作
  /*
  $('.intro').click(function(){
    var $info = $(this).find('.info')
    if($info.hasClass('open')){
      $info.removeClass('open').slideUp();
      $(this).find('.show-btn').html('▼')
    }else{
      $('.info').removeClass('open').slideUp();
      $('.show-btn').html('▼')
      $(this).find('.info').addClass('open').slideDown();
      $(this).find('.show-btn').html('◀')
    }
  });
  */
});
