const correctPassword = "FLASH"; // Set your password here

        function checkPassword() {
            const userPassword = document.getElementById("password").value;
            if (userPassword === correctPassword) {
                window.location.href = " https://karthikkkr1085.github.io/password/"; // Redirect to the main content page
            } else {
                alert("Incorrect password. Access denied.");
            }
        }