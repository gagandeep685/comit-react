

let movies=prompt('Enter three favourite movies');
let arr=movies.split(',');


console.log(movies);

let text=prompt('Enter the sentance to make it reverse');
function reverseString(text){
   var splitString=text.split('');
   var reverseArray=splitString.reverse();
   var joinArray=reverseArray.join('');
   return joinArray;
   
  
}
console.log(reverseString(text));


