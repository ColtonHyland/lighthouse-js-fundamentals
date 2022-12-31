function range(start, end, step){
  let numbers = [];
  if(end < start){
    return numbers;
  }
  if(end < start || start, end, step === undefined || step === 0 || step < 0){
    return numbers;
  }
  numbers.push(start);
  let i = 0;
  while(numbers[i] < end){
    if(numbers[i] + step > end){
      break;
    }
    numbers.push(numbers[i] + step);
    i++;
  }
  return numbers;
}

console.log(range(10,0,1));