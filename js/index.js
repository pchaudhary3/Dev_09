$(function(){
   $('#user_sign_input').on('keyup',function(e){
      // var Custom_sign_length=$(this).val().length;
       $('#tiles').text($(this).val().length);
       calculations($(this).val().length);
   })
   $('#user_font_input,#user_color_input').on('click',function(e){
       var font_added = $('#user_font_input').is(':checked');
     console.log(font_added);
       var color_added = $('#user_color_input').is(':checked');
       calculations($('#user_sign_input').val().length,font_added,color_added);
     
   })
  $('#confirm_Order').on('click',function(e){
    e.preventDefault();
   
    
    return confirm('Total amount: '+ 4);
   })
 })

function calculations(no_of_tiles,fontadded,coloradded)
{
  var cost_per_tile=5;
  var shipping = 7;
 if(fontadded && coloradded)
    {
      cost_per_tile=7;
    }else if(coloradded)
    {
      cost_per_tile=6;
    }else if(fontadded){
      cost_per_tile =6;
    }else
      {
        cost_per_tile =5;
      }
  if(no_of_tiles>0)
    {
    shipping=7;  
    }
  else{
    shipping=0;
  }
  var subTotal = no_of_tiles * cost_per_tile;
  var grandTotal = subTotal + shipping;
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  return grandTotal;
}