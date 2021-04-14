function check_str(str){
  
   if (str.length<=4) {
      console.log(false);
   }
   
   var front= str.substring(0,4)
   
   if (front=='java') {
      console.log(true);
   }else{
      console.log(false);
   }
}

check_str('javascript')
check_str('python')

