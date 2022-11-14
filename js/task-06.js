const inputClass = document.querySelector("#validation-input");
const inputNumber = Number(inputClass.dataset.length)

inputClass.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === inputNumber) {
        inputClass.classList.remove("invalid")
        inputClass.classList.add("valid")
    } else {
        inputClass.classList.remove("valid")
        inputClass.classList.add("invalid");
    };
});
