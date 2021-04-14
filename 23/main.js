function convert(num){
  var hours= Math.floor(num/60)
  var min= num % 60
  
  console.log(`${hours} hours , ${min} minutes`);
}

convert(60)
convert(460)