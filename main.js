$(Document).ready( function (){
$('#button').click( function go(){
    $('#abovelogo').text(3).fadeIn(1000, function(){
       $('#abovelogo').text(3).fadeOut(1000, function(){
         $('#abovelogo').text(2).fadeIn(1000, function(){
           $('#abovelogo').text(2).fadeOut(1000, function(){
             $('#abovelogo').text(1).fadeIn(1000, function(){
               $('#abovelogo').text(1).fadeOut(1000, function(){
                 $('#abovelogo').text('Go!').fadeIn(1000, function(){
                   $('#abovelogo').text('Go!').fadeOut(1000)
//                 setTimeout(go,1000);
                   });
               })
             })
           })
         })
       })
    });

})
});