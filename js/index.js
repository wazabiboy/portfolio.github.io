$(document).ready(function(){
    $(".img-frame").on({
       mouseenter: function(){
           $(this).closest('.img-frame').children('.overley').fadeIn();
       }, 
       mouseleave: function(){
           $(this).closest('.img-frame').children('.overley').fadeOut();
       }
   });
 });
 