

function remove_char(str, char_pos){
   
   var part1= str.substring(0, char_pos)                    
   var part2= str.substring(char_pos+1, str.length)
   console.log(part1+part2);
}

remove_char('Robeyoul', 3)