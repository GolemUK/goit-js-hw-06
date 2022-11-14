let counterValue = 0;

const counterButton = {
    dec: document.querySelector("[data-action='decrement']"),
    inc: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value")
};

const decBtn = () => {
    counterValue -= 1;
    document.getElementById("value").textContent = counterValue;
};

const incBtn = () => {
    counterValue += 1;
    document.getElementById("value").textContent = counterValue;
};

counterButton.dec.addEventListener('click', decBtn);
counterButton.inc.addEventListener('click', incBtn);

