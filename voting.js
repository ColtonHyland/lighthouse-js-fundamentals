const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const validStations = [];

  for(const station of stations){
    const capacity = station[1];

    if (capacity >= 20){
      const type = station[2];

      if (type === "school" || type === "community centre"){
        validStations.push(station[0])
      }
    }
  }

  return validStations;
}

console.log(chooseStations(stations))