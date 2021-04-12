var cel_value= parseInt(prompt('Give any celcius value'))
var far_value= parseInt(prompt('Give any farenheit value'))


function celTofar (celcius){
   var farenheit= celcius * (9/5) + 32
   console.log(farenheit + '°' + ' farenheit');
}

function farTocel (farenheit){
   var celcius = (farenheit - 32) * 5/9
   console.log(celcius + '°' + ' celcius');
}



celTofar(cel_value)
farTocel(far_value)
