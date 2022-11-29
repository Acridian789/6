
const text = document.querySelector('#Field');
text.addEventListener('input',(event) => {
    const userText = document.querySelector('#Field').value;
    const userTextField = document.querySelector('#duplicateField');
    userTextField.textContent = userText;
})
const button = document.querySelector('#button');
button.addEventListener('click',(event) => {
    event.preventDefault();
    const userText = document.querySelector('#Field').value;
    console.log(userText);
    document.querySelector('#Field').value = "";
    const userTextField = document.querySelector('#duplicateField');
    userTextField.textContent = '';
})