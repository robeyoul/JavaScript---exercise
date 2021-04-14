function first_last_same(arr){
   
   var lastNum= arr.length - 1
   
   if (arr[0]== arr[lastNum]) {
      console.log(true);
   }else{
      console.log(false);
   }
}

first_last_same([10,20,30])
first_last_same([10,20,10])