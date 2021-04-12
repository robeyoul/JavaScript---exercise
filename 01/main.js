const date= new Date()

const day= date.getDay()

const dayList= ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']               


console.log(`TODAY IS: ${dayList[day]}`);



var hours= date.getHours()
var minutes= date.getMinutes()
var second= date.getSeconds()


var prepend= (hours>=12)? 'PM': 'AM';
var hours= (hours>=12)? hours-12 : hours



if (hours === 0 && prepend === 'PM') {
   if (minutes === 0 && second === 0) {
      hours= 12;
      prepend= 'NOON'
   }else{
      hours= 12;
      prepend= 'PM'
   }
}

if (hours=== 0 && prepend==='AM') {
   if (minutes===0 && second===0) {
      hours= 12;
      prepend= 'MID NIGHT'
   }else{
      hours= 12;
      prepend= 'AM'
   }
}
console.log(`${hours} ${prepend} : ${minutes} : ${second}`);


