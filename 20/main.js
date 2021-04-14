function greater_value(x,y){
   
   var num1= 100-x;
   var num2= 100-y;
   
   if (num1<num2) {
      console.log(x + ' is nearest to 100');
   }else{
      console.log(y + ' is nearest to 100');
   }
}

greater_value(90,89)
greater_value(50,70)