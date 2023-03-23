// Write your code here!
// Remove the Main using the main ID
const main = document.getElementById("main");
main.remove();

// Create newHeader and have it point to the <h1> node
// give the newHeader the id of "victory"
//put text of newHeader to be "Cesar is the Champion"
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Cesar is the champion";