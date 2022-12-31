function loopyLighthouse(range, multiples, words){
  let curr = range[0];
  for(let i = 0; curr <= range[1]; i++){
    if((curr % multiples[0] === 0) && (curr % multiples[1] === 0)){
      console.log(words[0] + words[1])
    }else if(curr % multiples[0] === 0){
      console.log(words[0]);
    }else if(curr % multiples[1] === 0){
      console.log(words[1]);
    }else{
      console.log(curr);
    }
    curr += 1;
  } 
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);