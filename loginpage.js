// Function to toggle the visibility of the password
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '👁️'; // Change icon to closed-eye
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '👁️'; // Change icon to open-eye
    }
}

// Function to validate the login details
function validateLogin() {
    const usernameInput = document.getElementById('username').value.toLowerCase();
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // List of valid usernames and passwords
    const validCredentials = [
        { username: 'saurabhanand', password: '12345678' },
        { username: 'arushsarna', password: 'crosshair' },
        { username: 'pankajahuja', password: 'alphainvestments' }
    ];

    // Check if the entered credentials match any in the list
    const isValid = validCredentials.some(cred => 
        cred.username === usernameInput && cred.password === passwordInput
    );

    if (isValid) {
        window.location.href = 'http://tradingdashboard.000.pe/?i=1'; // Redirect to the main trading dashboard
        return false;
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.style.display = 'block'; // Show error message
        return false;
    }
}
