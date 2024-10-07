document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const responseMessage = document.getElementById("message");

    // Function to get CSRF token
    async function getCsrfToken() {
        const response = await fetch('/csrf-token');
        const data = await response.json();
        return data.csrfToken;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const fullName = document.getElementById("fullName").value;
        const idNumber = document.getElementById("idNumber").value;
        const accountNumber = document.getElementById("accountNumber").value;
        const password = document.getElementById("password").value;

        try {
            const csrfToken = await getCsrfToken(); // Get CSRF token

            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken
                },
                body: JSON.stringify({
                    fullName,
                    idNumber,
                    accountNumber,
                    password,
                }),
            });

            const result = await response.json();
            responseMessage.textContent = result.message;
            responseMessage.style.color = response.ok ? "green" : "red";

            if (response.ok) {
                form.reset();  // Clear form if registration is successful
            }
        } catch (error) {
            console.error("Error during registration:", error);
            responseMessage.textContent = "An error occurred during registration. Please try again.";
            responseMessage.style.color = "red";
        }
    });
});
