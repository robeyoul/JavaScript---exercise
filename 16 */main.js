function changing_position(str){
   if (str.length <=1) {
      console.log(str);
   }
   
   var mid_value= str.substring(1, str.length-1)                                 
   
   var output= str.charAt(str.length-1)+ mid_value + str.charAt(0)
   console.log(output);
}

changing_position('Robeyoul')