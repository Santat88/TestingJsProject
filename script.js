document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-form");
    const output = document.getElementById("output");
    const switchButton = document.getElementById("theme-toggle");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const lastName = document.getElementById("last-name").value;
        const firstName = document.getElementById("first-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        
        output.innerHTML = `
            <h3>Данные формы:</h3>
            <p><strong>Фамилия:</strong> ${lastName}</p>
            <p><strong>Имя:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
        `;
    });
    
    switchButton.addEventListener("click", function () {
        document.body.classList.toggle("night-mode");
    });
});
