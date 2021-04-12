var num1= document.getElementById('num1')
var num2= document.getElementById('num2')                
var result= document.getElementById('result')
var divided= document.getElementById('divided')
var multiple= document.getElementById('multiple')



divided.addEventListener('click',function (){
   result.textContent= num1.value / num2.value
   
   
})


multiple.addEventListener('click', function (){
   result.textContent= num1.value * num2.value
})