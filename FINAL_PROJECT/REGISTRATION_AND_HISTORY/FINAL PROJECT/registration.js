document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const inputs = document.querySelectorAll(".input-group input, .input-group select, .checkbox-group input");
    const radioButtons = document.querySelectorAll("input[name='gender']");
    const submitButton = document.querySelector(".form-button button");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        inputs.forEach((field) => {
            const feedback = field.closest(".input-group, .checkbox-group").querySelector(".feedback");
            if (!field.value.trim() || (field.type === "checkbox" && !field.checked)) {
                isValid = false;
                feedback.style.display = "block";
            }
        });

        const genderFeedback = document.querySelector(".radio-group .feedback");
        if (!document.querySelector("input[name='gender']:checked")) {
            isValid = false;
            genderFeedback.style.display = "block";
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            // Redirect to a specific link after validation
            event.preventDefault();
            window.location.href = "https://www.facebook.com/jefferson.petronio/"; // Change this to your desired link
        }
    });

    inputs.forEach((field) => {
        field.addEventListener("input", function () {
            const feedback = field.closest(".input-group, .checkbox-group").querySelector(".feedback");
            if (field.value.trim() || (field.type === "checkbox" && field.checked)) {
                feedback.style.display = "none";
            } else {
                feedback.style.display = "block";
            }
        });
    });

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            document.querySelector(".radio-group .feedback").style.display = "none";
        });
    });
});
