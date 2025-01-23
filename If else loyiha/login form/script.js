function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Parol uzunligi va kuchini tekshirish
    if (password.length < 8) {
        message.textContent = "Parol juda qisqa! Kamida 8 ta belgi bo'lishi kerak.";
        message.className = "error";
        return false; // Formani yubormaslik
    } else if (password.toLowerCase() === "12345678" || password.toLowerCase() === "password") {
        message.textContent = "Bu parol juda oddiy! Boshqa parol kiriting.";
        message.className = "warning";
        return false;
    } else if (password.length >= 8 && /^[a-zA-Z0-9]+$/.test(password)) {
        message.textContent = "Bu parol yaxshi, lekin yanada kuchliroq qiling!";
        message.className = "warning";
        return false;
    } else {
        message.textContent = "Parol mukammal! Xush kelibsiz!";
        message.className = "success";
        return true; // Formani yuborish
    }
}
