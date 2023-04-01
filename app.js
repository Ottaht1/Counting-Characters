// Get the textarea,counter and remaining counter elements
const textareaElement = document.getElementById("textarea");
const counterElement = document.getElementById("counter");
const remainingCharactersElement = document.getElementById("remaining-counter");

// Add an event listener to the textarea for when the user types
textareaElement.addEventListener("keyup", () => {
  // Call the updateCounter function
  updateCounter();
});


// Call the updateCounter function on page load to refresh the counter
updateCounter();

// Define the updateCounter function
function updateCounter() {
  // Set the counter element tot the length of the textarea value
  counterElement.innerText = textareaElement.value.length;
  
  
  // Calculate the remaining characters and set the remainingCharactersElement to that value
  remainingCharactersElement.innerText =
    textareaElement.getAttribute("maxLength") - textareaElement.value.length;
}
