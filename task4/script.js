let text = document.querySelector('#text');

text.addEventListener('click',(event) => {
    event.preventDefault();
    let userText = prompt('Введите новый текст');
    let userTextField = document.querySelector('span');
    userTextField.textContent = userText
})