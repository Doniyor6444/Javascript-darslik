


const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const greetingDiv = document.getElementById('greeting');


submitButton.addEventListener('click', function() {
    
    const userName = nameInput.value.trim();  // trim() methodi bosh joylarni olib tashlaydi

    // Agar ism bo'sh bo'lsa, xabar berish
    if (userName === '') {
        greetingDiv.textContent = 'iltimos, ismingizni kiriting!';
        greetingDiv.style.color = 'red';
    } else {
        // Ismni ko'rsatish
        greetingDiv.textContent = `Salom, ${userName}!`;
        greetingDiv.style.color = 'green';
    }

    // Input maydonini bo'shatish 
    nameInput.value = '';
});
