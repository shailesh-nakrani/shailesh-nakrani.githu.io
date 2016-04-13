$(function(){
   $('.navbar-nav li').click(function(e){
      var target = $(e.target).closest('li');
      $('.navbar-nav li').removeClass('active');
      target.addClass('active');
   });
    $('.portfolio-box a').click(function(e){
      var target = $(e.target).closest('a');
      $('.portfolio-box a').removeClass('active');
      target.addClass('active');
   });
   
});
