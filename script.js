// Proceed to form page if user selects 'yes'
function proceedToForm() {
    const choice = document.getElementById('hack-problem-choice').value;
    if (choice === 'yes') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('form-page').classList.remove('hidden');
    } else {
        alert('We are here whenever you need us!');
    }
}

// Toggle phone field visibility
function togglePhoneField() {
    const phoneField = document.getElementById('phone-number');
    phoneField.classList.toggle('hidden');
}

// Log mood in the history
function logMood() {
    const mood = document.getElementById('mood-select').value;
    const moodHistory = document.getElementById('mood-history');
    const newEntry = document.createElement('div');
    newEntry.textContent = `Mood logged: ${mood}`;
    moodHistory.appendChild(newEntry);
}

// Handle Quiz answers and save them in hidden fields
function handleQuiz() {
    const quizAnswers = [];
    
    // Get quiz answers from the form
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('input:checked');
        if (selectedOption) {
            quizAnswers.push(selectedOption.value);
        } else {
            quizAnswers.push('No answer');
        }
    });

    // Store answers in a hidden input field
    document.getElementById('quiz-answers').value = JSON.stringify(quizAnswers);

    // Hide the quiz section and display form
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('form-section').classList.remove('hidden');
}

// Chatbot logic
const smartResponses = [
    "It sounds like you're going through something difficult, and that's okay. Everyone needs help sometimes. For exact and better assistance, please submit your problem.",
    "I can imagine that situation must feel overwhelming. Remember, you're not alone. For exact and better assistance, please submit your problem.",
    "That sounds tough, but there are always solutions. Let's work together on this. For exact and better assistance, please submit your problem.",
    "I understand you're facing a challenge. Sometimes talking about it can help. For exact and better assistance, please submit your problem.",
    "It's okay to feel unsure sometimes. But with the right support, things can improve. For exact and better assistance, please submit your problem."
];

// Function to send smart chat responses
function sendSmartChat(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input').value.trim();
        const chatOutput = document.getElementById('chat-output');
        chatOutput.innerHTML += `<p><b>You:</b> ${input}</p>`;

        setTimeout(() => {
            const response = smartResponses[Math.floor(Math.random() * smartResponses.length)];
            chatOutput.innerHTML += `<p><b>DP-CHATHUB:</b> ${response}</p>`;
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }, 1000);

        document.getElementById('chat-input').value = '';
    }
}


