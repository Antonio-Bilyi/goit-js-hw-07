const inputElem = document.getElementById('name-input');
const outputElem = document.getElementById('name-output');

inputElem.addEventListener('input', () => {
    const inputValue = inputElem.value.trim();

    outputElem.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});