// array maximum

const arr = [3, 11, 7, 2, 9, 10];

function max(array){
  let val = array[0];
  for (let i=1; i<array.length; i++){
    if(array[i] > val) val = array[i];
  }
      return val;
 
}
console.log(max([3,11,7,2,9,10]));