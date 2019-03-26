
const printFarmInventory = (cows, chickens) => {
  console.log(formatAnimal(cows), "Cows");
  console.log(formatAnimal(chickens), "Chicken");
}

function formatAnimal(animal) {
  if(animal >= 100) return animal;
  if(animal >= 10) return `0${animal}`;
  return `00${animal}`;
}

printFarmInventory(50, 7);
