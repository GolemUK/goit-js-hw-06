const nameInpute = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInpute.addEventListener('input', inputEvent);

function inputEvent(event) { 
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous"
    }
}