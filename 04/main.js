var firstSide, secondSide, thirdSide, s, area;

firstSide= 5;
secondSide= 6;
thirdSide= 7;

s= (firstSide+secondSide+thirdSide)/2;

area= (Math.sqrt(s* (s - firstSide) * (s - secondSide) * (s - thirdSide)))
console.log(area);