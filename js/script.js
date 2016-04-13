$(function(){
   $('.navbar-nav li').click(function(e){
      var target = $(e.target).closest('li');
      $('.navbar-nav li').removeClass('active');
      target.addClass('active');
   });
});
