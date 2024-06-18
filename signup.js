document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { username, email, password };
    // let newUser = {
    //     id: jsonData.users.length + 1, // Assign a unique ID (you might handle this differently in a real app)
    //     username: username,
    //     email: email,
    //     fullName: fullName,
    //     address: address
    //   };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Signup successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Signup failed!');
    });
});
