const textInput = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const result = document.getElementById('result');

let debounceTimer;

// Función para invertir un string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Actualiza el resultado en pantalla
function updateResult() {
    const text = textInput.value;
    if (text.length >= 3) {
        const reversed = reverseString(text);
        result.textContent = reversed;
        copyBtn.disabled = false;
    } else {
        result.textContent = '';
        copyBtn.disabled = true;
    }
}

// Copiar al portapapeles
function copyToClipboard() {
    const text = result.textContent;
    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copiado ✔️';
        setTimeout(() => copyBtn.textContent = 'Copiar', 1500);
    });
}

// Evento de input con debouncer de 0.5 segundos (500 ms)
textInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    if (textInput.value.length >= 3) {
        reverseBtn.disabled = false;
        debounceTimer = setTimeout(updateResult, 500);
    } else {
        reverseBtn.disabled = true;
        result.textContent = '';
        copyBtn.disabled = true;
    }
});

// Evento para botón manual
reverseBtn.addEventListener('click', updateResult);

// Evento para copiar
copyBtn.addEventListener('click', copyToClipboard);
