let submissions = [];

function login() {
    const hackProblemChoice = document.getElementById('hack-problem-choice').value;
    if (hackProblemChoice === 'yes') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('form-page').classList.remove('hidden');
    } else {
        alert("Come back if you need help!");
    }
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const problemType = document.getElementById('problem-type').value;
    const problem = document.getElementById('problem').value;

    const submission = { name, email, problemType, problem };

    // Save the submission in the local storage or send it to your server
    submissions.push(submission);
    alert("Your problem has been submitted!");
    
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('problem-type').value = 'financial';
    document.getElementById('problem').value = '';
}

function displayPasswordPrompt() {
    document.getElementById('password-container').classList.remove('hidden');
}

function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    
    if (enteredPassword === '12345') {
        document.getElementById('password-container').classList.add('hidden');
        displaySubmissions();
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function displaySubmissions() {
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = '<h2>Submitted Problems:</h2>';
    
    if (submissions.length === 0) {
        responseContainer.innerHTML += '<p>No submissions yet.</p>';
    } else {
        submissions.forEach(submission => {
            responseContainer.innerHTML += `
                <p><b>Name:</b> ${submission.name}</p>
                <p><b>Email:</b> ${submission.email}</p>
                <p><b>Problem Type:</b> ${submission.problemType}</p>
                <p><b>Problem:</b> ${submission.problem}</p>
                <hr>
            `;
        });
    }
}
