var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 
 function dwarfRollCall(dwarves){
   var array =[]
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i+1]} `)
   }
   return array.join("")
 }
// dwarfRollCall should call the dwarves 
function summonCaptainPlanet(planetCalls){
  
	return planetCalls.map(function(powers) {
		return powers.toUpperCase() + "!";
	});
}

//The function should accept calls. These function should tell us if the calls are longer then 4.
//To achieve this we will be using conditional method if and else. Doing this allows us to perform different actions for different decisions.
function longPlaneteerCalls(words) {
    let wordCallA = true;
  if (words.length > 4) {
    return wordCallA;
} else {
    return false;
  }
}

function findTheCheese (foods) {
  
  let cheeses =['cheddar','gouda','camembert'];
  
  for(var i = 0; i < foods.length; i++){
    
    for(var j = 0; j < cheeses.length; j++){
      
      if(cheeses[j] === foods[i]){
        return foods[i];
      }
    }
  }
  return 'no cheese!';
}