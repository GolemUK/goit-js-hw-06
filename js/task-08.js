const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elementsForm = e.currentTarget.elements;
    const email = elementsForm.email.value;
    const password = elementsForm.password.value;
    
    if (email.length === 0 || password.length === 0) {
        alert("Всі поля мають бути заповнені!")
        return;
    }

    const formData = {
        email,
        password,
    }
    console.log(formData);
    loginForm.reset();
});
