
var input= parseInt(prompt('Input a number between 1 to 10'));             

var random_num= Math.round(Math.random()*10) +1

if (input==random_num) {
   console.log('Good luck random num also '+ random_num);
}else{
   console.log('Not Mathched random num is ' + random_num);
}