const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');
    alert('Посмотри в консоль');
})

const alerT = document.querySelector('#alert');
alerT.addEventListener('click', () => {
    alert('предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»');
})

const prompT = document.querySelector('#prompt');
prompT.addEventListener('click', () => {
    prompt('отображает диалоговое окно с необязательным запросом на ввод текста.');
})


