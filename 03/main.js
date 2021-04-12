var today= new Date()

var fullYear= today.getFullYear()
var month = today.getMonth()
var date = today.getDate()

if(date<10){
   date= '0'+ date
}else{
   date = date
}

if (month<10) {
   month = '0'+ month
}else{
   month= month
}





console.log(`${month} / ${date} / ${fullYear}`);

console.log(`${month} - ${date} - ${fullYear}`);               

console.log(`${date} / ${month} / ${fullYear}`);

console.log(`${date} - ${month} - ${fullYear}`);

