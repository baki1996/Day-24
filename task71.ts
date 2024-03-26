
let age = 25;
age = 26; 
console.log(age); 


const name = "Alice";
try {
    name = "Bob"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.