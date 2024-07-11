// Step 1: Declare variables that hold references to the input, button, and list elements
const input = document.getElementById('chapterInput');
const button = document.getElementById('addButton');
const list = document.getElementById('chapterList');

// Step 2: Create a click event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Step 3: Check if the input is not blank
    if (input.value.trim() !== '') {
        // Step 4: Move the previous code inside this if block to support correct flow

        // Create an li element to hold each entry's chapter title and an associated delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Populate the li element variable's textContent or innerHTML with the input value
        li.textContent = input.value;

        // Populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        // Append the delete button to the li element
        li.appendChild(deleteButton);

        // Append the li element to the unordered list in the HTML
        list.appendChild(li);

        // Add an event listener to the delete button to handle removing chapters from the list
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Change the input value to an empty string to clean up the interface for the user
        input.value = '';
    } else {
        // If input is blank, provide a message or at least do nothing and return focus to the input field
        alert('Please enter a chapter.');
    }

    // Regardless if a list item was created or not, set focus back to the input element
    input.focus();
});
