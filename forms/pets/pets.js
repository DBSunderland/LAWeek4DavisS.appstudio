// a. rename a new form 'pets'

// b. All output goes to the concole and uses template literals (with the ticks).

// c. On the 'pets' form, create an array named 'petNames' that contains these nams.
// Darcy, Jack, Jerry, Marty, Vito, Vinny, Riley, Saddie, Marge, Sam


let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

/*
console.log(`${petNames}`)
*/

// d. Create a second new array named 'withSal' that holds the original array data with the string "Sal" added to the end of the new array.
// Hint: you can set 'withSal' equal to 'petNames'.

/*
let withSal = petNames
withSal.push('Sal')
console.log(`${withSal}`)
*/

// e. Use the array method 'push' to add the name 'Sal' to the end of the 'petNames' array.
// Hint: you add a method by putting a period between the array name and the method name.
// Then put "sal" int he method parentheses.

petNames.push('Sal')
console.log(`${petNames}`)

// f. Get the third name in the pets array and output it to the console in this format:
// The Third pet is named XXXX.

let thirdPet = petNames[2]
console.log(`The third pet is named ${thirdPet}`)

// g. Get a count of how many items are in the array and output it to the console in this form:
// The array has X names in it.

let petCount = petNames.length
console.log(`The array has ${petCount} names in it.`)

petNames.pop()
console.log(`${petNames}`)
