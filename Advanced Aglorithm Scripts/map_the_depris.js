function orbitalPeriod(array) {
  var GM = 398600.4418,
      earthRadius = 6367.4447;
 
  return array.map(function(currentElement) {
    return {
      name: currentElement.name,
      orbitalPeriod: getOrbitalPeriod(currentElement.avgAlt, GM, earthRadius) // We get the orbital radius using the previous function!
    };
  });
 
  function getOrbitalPeriod(avgAltitude, GM, planetRadius) {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(avgAltitude + planetRadius, 3) / GM));
  }
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
