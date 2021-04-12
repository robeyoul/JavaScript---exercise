
function leapYear(year) {
   
   if(year % 400===0){
      console.log(year + ' is leap Year');
   }else if( year % 100 !== 0 && year % 4==0){
      console.log(year + ' is a leap year');
   }else{
      console.log(year + ' is not leap year');
   }
}

leapYear(2016)
leapYear(2000)
leapYear(2017)
leapYear(2012)
leapYear(1700)
leapYear(1800)
leapYear(100)