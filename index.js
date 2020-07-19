
function printString(myString){
 console.log(myString[0]);
 if(myString.length > 1){
  let mySubString = myString.substring(1, myString.length); 
  printString(mySubString);
 }else{
  return true;
 }
}

printString("supercalifragilisticexpialidocious");

function reverseString(myString){

  if (myString.length < 1 ){
   return myString; 
  }
  else {
   return reverseString(myString.substring(1)) + myString[0];
  }
}


reverseString('pizza')



function isPalindrome (string){
  let l = string.length 

  if (l < 2){
   return true;
  }
  else if (string[l - 1] === string[0]){
   return isPalindrome(string.substring(1, l-1))
  }
  else {
   return false;
  }
}

isPalindrome('pizza')



function addUpTo(array, index){
 // console.log(array[index - 0] + array[index - 1] + array[index - 2])

 if(index){
  return array[index] + addUpTo(array, --index)
 }else{
  return array[index]
 }

 // return index ? array[index] + addUpTo(array, --index) : array[index];

}

let array = [1,2,3,4,5]
addUpTo(array, 3)


function maxOf(array){
 if(array.length < 2){
  return array[0];
 }
 else{
  // return Math.max(myArray.pop(), maxOf(myArray));
  return Math.max(array.pop(), maxOf(array) )
 }
}

maxOf(array)


function includesNumber(array, number){
 if(!array.length){
  return false
 }
 else if (array[0] === number){
  return true
 }
 else{
  return includesNumber(array.slice(1), number) 
 }
}


includesNumber(array, 3)


// function includesNumber(myArray, myNumber) {
//  if (!myArray.length) {
//    return false;
//  } else if (myArray[0] === myNumber) {
//    return true;
//  } else {
//    return includesNumber(myArray.slice(1), myNumber);
//  }
// }