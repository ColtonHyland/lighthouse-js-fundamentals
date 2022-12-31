const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("List of ingredients: ")//while loop
let i = 0;
while (i < ingredients.length){
  if(i === ingredients.length - 1){
    console.log(ingredients[i] + ".\n")
  }else{
  console.log(ingredients[i] + ", ")
  }
  i++;
}

console.log("List of ingredients: ")//for loop
for(let i = 0; i < ingredients.length; i++){
  if(i === ingredients.length - 1){
    console.log(ingredients[i] + ".\n")
  }else{
  console.log(ingredients[i] + ", ")
  }
}

console.log("List of ingredients: ")//backward for loop
for(let i = ingredients.length - 1; i >= 0; i--){
  if(i === 0){
    console.log(ingredients[i] + ".\n")
  }else{
  console.log(ingredients[i] + ", ")
  }
}
