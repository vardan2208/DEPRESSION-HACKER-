function proceedToForm() {
    const choice = document.getElementById('hack-problem-choice').value;
    if (choice === 'yes') {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('form-page').classList.remove('hidden');
    } else {
        alert('We are here whenever you need us!');
    }
}

function togglePhoneField() {
    const phoneField = document.getElementById('phone-number');
    phoneField.classList.toggle('hidden');
}

function logMood() {
    const mood = document.getElementById('mood-select').value;
    const moodHistory = document.getElementById('mood-history');
    const newEntry = document.createElement('div');
    newEntry.textContent = `Mood logged: ${mood}`;
    moodHistory.appendChild(newEntry);
}

// Chatbot logic
const smartResponses = [
    "It sounds like you're going through something difficult, and that's okay. Everyone needs help sometimes. For exact and better assistance, please submit your problem.",
    "I can imagine that situation must feel overwhelming. Remember, you're not alone. For exact and better assistance, please submit your problem.",
    "That sounds tough, but there are always solutions. Let's work together on this. For exact and better assistance, please submit your problem.",
    "I understand you're facing a challenge. Sometimes talking about it can help. For exact and better assistance, please submit your problem.",
    "It's okay to feel unsure sometimes. But with the right support, things can improve. For exact and better assistance, please submit your problem."
];

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

