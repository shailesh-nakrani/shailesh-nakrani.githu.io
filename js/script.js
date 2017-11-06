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
   $('input').blur(function(e){
      var input = $(e.target);
      if(input.val()){
         input.addClass('active');
      } else {
         input.removeClass('active');
      }
   });

   var form = $('#contactForm');
   form.on('submit', function(e){
      e.preventDefault();
      var array = form.serializeArray();
      var obj = {};
      array.forEach(function(val){
        obj[val.name] = val.value;
      });
      var url = 'mailto:snakrani7594@gmail.com';
      url = url + '?' + $.param({subject: obj.subject, body: obj.body });
      var win = window.open(url, '_blank');
      win.focus();
   });
$('.ripple').materialripple();
   $(document).scroll(function(){
      if($(document).scrollTop() > 30){
        $('body').addClass('scroll-active');
      } else {
        $('body').removeClass('scroll-active');
      }
   });
});

$('.navbar-nav li').click(function(){
   $('.navbar-toggle').click();
});
$(document).ready(function(){
    var links = [
        {
            "bgcolor":"#ff4081",
            "icon":"<i class='fa fa-thumbs-up'></i>"
        },
        {
            "url":"https://in.linkedin.com/in/shailesh-nakrani-326439118",
            "bgcolor":"#1A85BC",
            "color":"white",
            "icon":"<i class='fa fa-linkedin-square'></i>",
            "target":"_blank",
            "title" : "Linkedin"
        }, 
        {
            "url":"http://snakrani.deviantart.com",
            "bgcolor":"#475C4D",
            "color":"white",
            "icon":"<i class='fa fa-deviantart'></i>",
            "target":"_blank",
            "title" : "Deviantart"
        },
        {
            "url":"https://dribbble.com/Shailesh_nakrani",
            "bgcolor":"#EA4C89",
            "color":"white",
            "icon":"<i class='fa fa-dribbble'></i>",
            "target":"_blank",
            "title" : "Dribbble"
        }, 
        {
            "url":"https://www.instagram.com/shailesh_nakrani",
            "bgcolor":"#9b6954",
            "color":"white",
            "icon":"<i class='fa fa-instagram'></i>",
            "target":"_blank",
            "title" : "Instagram"
        },              
        {
            "url":"https://twitter.com/snakrani7594",
            "bgcolor":"#55ADEF",
            "color":"white",
            "icon":"<i class='fa fa-twitter'></i>",
            "title" : "Twitter"
        },
        {
            "url":"https://plus.google.com/+ShaileshNakranidiff",
            "bgcolor":"#DE4B39",
            "color":"white",
            "icon":"<i class='fa fa-google-plus'></i>",
            "target":"_blank",
            "title" : "Google+"
        },
        {
            "url":"https://www.facebook.com/sallu7594",
            "bgcolor":"#3B5999",
            "color":"white",
            "icon":"<i class='fa fa-facebook'></i>",
            "target":"_blank",
            "title" : "Facebook"
        },
       {
            "url":"https://www.behance.net/shailesh-nakrani",
            "bgcolor":"##0094FA",
            "color":"white",
            "icon":"<i class='fa fa-behance'></i>",
            "target":"_blank",
            "title" : "Behance"
        },       
        
    ]
    $('.kc_fab_wrapper').kc_fab(links);
})
