
function change_str(str){
   
   if(str.length<=3){
      console.log(str);
   }
   
  var last3word= str.substring(str.length-3)              
  var output= last3word+ str + last3word
  console.log(output);
}

change_str('robeyoul')
change_str('ac')