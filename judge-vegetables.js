function judgeVegetable(vegetables, metric){
  
  let best = 0;
  let bestName = "";

  for(let submission of vegetables){
    for(let metric2 in submission){
      if(metric2 === metric && best <= submission[metric2]){
        best = submission[metric2];
        bestName = submission.submitter;
      }
    }
  }
  return bestName;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric);