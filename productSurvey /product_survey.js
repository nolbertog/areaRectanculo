function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Ocultar el botón de envío después de hacer clic en él
    const submitButton = document.getElementById('submitBtn');
    submitButton.disabled = true;

    alert('Thank you for your valuable feedback');

    // Mostrar la información del usuario en el elemento HTML correspondiente
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Mostrar el contenedor de información del usuario
    document.getElementById('userInfo').style.display = 'block';
}

// Llamar a la función submitFeedback() cuando se haga clic en el botón de envío
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', submitFeedback);

// Permitir que se envíe el formulario al presionar la tecla "Enter"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
