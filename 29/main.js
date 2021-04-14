var number = '+88-01867100385'

var regExp= /(\+88)?-?01[1-9]\d{8}/g

var match= number.match(regExp)

var replace= number.replace(regExp,'phone')

var test = regExp.test(number)

console.log(match, replace, test);