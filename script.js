const registeredUsers = {}; 

function register() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regUsername.trim() === '' || regPassword.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (registeredUsers[regUsername]) {
        alert('Username already registered.');
        return;
    }

    registeredUsers[regUsername] = regPassword;
    alert('Registration successful. You can now log in.');
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (registeredUsers[loginUsername] && registeredUsers[loginUsername] === loginPassword) {
        alert('Login successful. Welcome back!');
    } else {
        alert('Invalid username or password.');
    }
}
