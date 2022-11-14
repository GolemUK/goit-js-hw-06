const inputControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputControl.addEventListener("input", rangeFontSize);

function rangeFontSize(event) {
    spanText.style.fontSize = event.currentTarget.value + "px";
}