function vowel_count(word){
   
   var vowel= word.replace(/[^aeiou]/g,'').length
   console.log(vowel);
}

vowel_count('javascript')
vowel_count('aeiou')