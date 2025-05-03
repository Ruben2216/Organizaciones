// Corrige el selector del icono del ojo para que coincida con la clase en el HTML
const passwordInput = document.getElementById('password');
const eyeIcon = document.querySelector('.eye-icon-login');

// Agrega el evento de clic para alternar la visibilidad de la contraseña
eyeIcon.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '👀'; // Cambia el icono al de "mostrar"
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '🙈'; // Cambia el icono al de "ocultar"
    }
});

// Selección de elementos necesarios
var signUpButton = document.querySelector('.sign-up-button');
var newHereSection = document.querySelector('.new-here-section');
var registerForm = document.querySelector('.register-form');

// Evento para mostrar la sección de registro
signUpButton.addEventListener('click', function() {
    newHereSection.classList.add('active');
    registerForm.classList.add('active');
    registerForm.classList.remove('hidden');
});

// Lógica para alternar visibilidad de contraseña en el registro
var registerPasswordInput = document.getElementById('register-password');
var eyeIconRegister = document.querySelector('.eye-icon-register');

eyeIconRegister.addEventListener('click', function() {
    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text';
        eyeIconRegister.textContent = '🙈'; // Cambia el icono
    } else {
        registerPasswordInput.type = 'password';
        eyeIconRegister.textContent = '👁️'; // Cambia el icono
    }
});

