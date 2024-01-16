import json from "./file.json" assert { type: 'json' };

//parsing json file and storing key names
const keys = Object.keys(data);
var keyNumber = keys.length;
var data = JSON.parse(json);

//create an array to store other arrays
const array = [];
//store team names to add to master array
const teamNames = [];
teamNames.length = keyNumber +1;
teamNames[0] = "Tm";

//fill teamNames array and add to master array
for (let i = 0; i<keyNumber;i++){
  teamNames.push(data[keys[i]]);
}
array.push(teamNames);

//fill array with win data from json file and add to master array
for (let i = 0; i<keyNumber;i++){
  const newArray =[];
  newArray.length = keyNumber+1;
  newArray[0] = teamNames[i+1];
  newArray[i+1]="--";
  for(let j = 0; j<keyNumber;j++){
  if(j == i){
    continue;
  }
  newArray[j+1] = data[keys[i]].keys[j].W
  }
  array.push(newArray);
}
array.push(teamNames)
