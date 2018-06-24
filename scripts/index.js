/**
 * Use form to submit
 */

// Grab the whole form from the DOM
const addPostForm = document.querySelector('#addPostForm');
// Add 'submit'-listener, and the callback is a separate function
addPostForm.addEventListener('submit', handleSubmitForm);

/**
 * Remember the 'event'-parameter which is automatically
 * passed to the function from the 'addEventListener'-function
 */
function handleSubmitForm(event) {
  // Prevent the form from reloading the page
  event.preventDefault();
  const form = event.target;
  /**
   * Select the p-tag with class '.error' inside of the form
   */
  const errorOutputElement = form.querySelector('.error');
  /**
   * Put the values from the form in new variables so we
   * can reference them easier. You don't have to do this
   * but it can be nice to have a better overview. If the
   * inputs are formatted with ID and name we can grab
   * the values directly from the form
   */
  const titleValue = form.title.value;
  const contentValue = form.content.value;

  //Check if the values are not empty strings (which are false )
  if (titleValue && contentValue) {
    errorOutputElement.innerText = '';
    console.log(titleValue);
    console.log(contentValue);
  } else {
    errorOutputElement.style.color = "red";
    errorOutputElement.innerText = 'Please write something';
  }

}

/**
 * Handle Single Input without form
 */

const singleInputValue = document.querySelector('#singleInputValue');
singleInputValue.addEventListener('change', handleSingleInput);

function handleSingleInput(event) {
  const inputField = event.target;
  if (inputField.value) {
    console.log(inputField.value);
  } else {
    // display error
  }
}
