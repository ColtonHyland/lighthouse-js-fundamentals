function lastIndexOf(numbers, val){
  let i = 0;
  let occurance = -1;
  while (i < numbers.length){
    if(numbers[i] === val){
      occurance = i;
    }
    i++;
  }
  return occurance;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));