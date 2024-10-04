const textValue = localStorage.getItem('editorText');
const editorElement = document.getElementById('editor');

if (textValue !== null) {
    editorElement.value = textValue
}

editorElement.onchange = () => {
    localStorage.setItem('editorText', editorElement.value)
    console.log(editorElement.value)
}