function sum_at_str(str){
   var sum=0;
   for(var i= 0; i<str.length; i++){
      
      if(/[0-9]/.test(str[i]))
         {
            sum += parseInt(str[i])
         }
   }
   console.log(sum);
}

sum_at_str('raju382992') // 33