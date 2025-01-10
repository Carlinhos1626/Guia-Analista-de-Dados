
// Header Logo Hide on Scroll
window.addEventListener('scroll', () => {
    const navLogo = document.querySelector('.nav_logo');
    if (window.scrollY > 50) { // Ajuste 50 para o ponto onde deseja ocultar o h2
        navLogo.style.opacity = '0';
        navLogo.style.transition = 'opacity 0.5s ease';
    } else {
        navLogo.style.opacity = '1';
    }
});


document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const templateParams = {
        user_name: name,
        user_email: email,
    };

    emailjs.send('service_97qgd7g', 'template_a6mxm68', templateParams)
        .then(function (response) {
            showAlert('E-mail enviado com sucesso!', 'success');
            console.log('Sucesso:', response.status, response.text);
        }, function (error) {
            showAlert('Erro ao enviar e-mail. Tente novamente.', 'error');
            console.error('Erro:', error);
        });
});

function showAlert(message, type) {
    const alertBox = document.getElementById('alertBox');
    const alertMessage = document.getElementById('alertMessage');

    // Atualiza a mensagem e a cor do alerta
    alertMessage.textContent = message;
    if (type === 'success') {
        alertBox.style.background = '#DFF2BF';
        alertBox.style.borderLeftColor = '#4CAF50';
        alertMessage.style.color = '#4F8A10';
    } else if (type === 'error') {
        alertBox.style.background = '#FFBABA';
        alertBox.style.borderLeftColor = '#f44336';
        alertMessage.style.color = '#D8000C';
    }

    // Mostra o alerta
    alertBox.classList.remove('hide');
    alertBox.classList.add('showAlert', 'show');

    // Oculta o alerta automaticamente após 6 segundos
    setTimeout(() => {
        hideAlert();
    }, 6000);
}

function hideAlert() {
    const alertBox = document.getElementById('alertBox');
    alertBox.classList.remove('showAlert', 'show');
    alertBox.classList.add('hide');
}

