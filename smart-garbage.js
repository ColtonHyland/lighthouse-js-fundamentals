function smartGarbage(trash, bins){
  for(let key in bins){
    if(key === trash){
      bins[key] += 1;
    }
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));