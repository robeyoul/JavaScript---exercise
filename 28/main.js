var text= '9a7b9f'
var regExp= /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g
var match = text.match(regExp)

var search = text.search(regExp)

var replace = text.replace(regExp, '#'+text)

var test = regExp.test(text)

console.log(match,search,replace,test);