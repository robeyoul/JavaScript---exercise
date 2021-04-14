

function validate(phone,email){
   var validPhone= /(\+880)?1[1-9]\d{8}/g                                        
   var validEmail=/[a-z0-9]@(gmail|hotmail|yahoo|outlook)\.com/g           
   
   if (validPhone.test(phone)) {
      console.log(phone);
   }else{
      console.log('It is not valid phone no');
   }
   
   if(validEmail.test(email)){
      console.log(email);
   }else{
      console.log('it is not valid email.');
   }
}

validate('01867100385','robeyoulawal@gmail.com')