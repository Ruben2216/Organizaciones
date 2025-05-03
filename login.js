js
const passwordInput = document.getElementById('password');
const eyeIcon = document.querySelector('.eye-icon-login');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '👀';
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '🙈';
    }
});