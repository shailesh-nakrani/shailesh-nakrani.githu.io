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
            "url":"https://in.pinterest.com/designer_nakrani",
            "bgcolor":"#c51d23",
            "color":"white",
            "icon":"<i class='fa fa-pinterest-p'></i>",
            "target":"_blank",
            "title" : "Pinterest"
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
            "url":"https://twitter.com/snakrani7594",
            "bgcolor":"#55ADEF",
            "color":"white",
            "icon":"<i class='fa fa-twitter'></i>",
            "target":"_blank",
            "title" : "Twitter"
        },
        {
            "url":"https://www.instagram.com/designer_nakrani",
            "bgcolor":"#9b6954",
            "color":"white",
            "icon":"<i class='fa fa-instagram'></i>",
            "target":"_blank",
            "title" : "Instagram"
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
            "url":"https://www.facebook.com/designer.nakrani",
            "bgcolor":"#3B5999",
            "color":"white",
            "icon":"<i class='fa fa-facebook'></i>",
            "target":"_blank",
            "title" : "Facebook"
        },
        {
            "url":"https://www.fiverr.com/shaileshnakrani",
            "bgcolor":"#02AE2C",
            "color":"white",
            "icon":"<i class='fa fa-pen-nib'></i>",
            "target":"_blank",
            "title" : "Fiverr"
        },
        {
            "url":"https://www.upwork.com/o/profiles/users/_~0191a2f4ab2c22f181",
            "bgcolor":"#6FD944",
            "color":"white",
            "icon":"<i class='fa fa-paint-brush'></i>",
            "target":"_blank",
            "title" : "Upwork"
        },
       {
            "url":"https://www.behance.net/shailesh-nakrani",
            "bgcolor":"#0037c4",
            "color":"white",
            "icon":"<i class='fa fa-behance'></i>",
            "target":"_blank",
            "title" : "Behance"
        },       
        
    ]
    $('.kc_fab_wrapper').kc_fab(links);
})
