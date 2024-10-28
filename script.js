function validateForm() {
    // Limpiar errores previos
    clearErrors();

    // Obtener los campos
    const firstName = document.getElementById("nombre");
    const lastName = document.getElementById("apellidos");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("telefono");
    const comment = document.getElementById("comentario");

    let isValid = true;

    // Validación del campo Nombre
    if (firstName.value.trim() === "") {
        showError(firstName, "Por favor, ingresa tu nombre.");
        isValid = false;
    }

    // Validación del campo Apellidos
    if (lastName.value.trim() === "") {
        showError(lastName, "Por favor, ingresa tus apellidos.");
        isValid = false;
    }

    // Validación del campo Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        showError(email, "Por favor, ingresa tu correo electrónico.");
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        showError(email, "Por favor, ingresa un correo electrónico válido.");
        isValid = false;
    }

    // Validación del campo Teléfono
    const phonePattern = /^[0-9\s]+$/;
    if (phoneNumber.value.trim() === "") {
        showError(phoneNumber, "Por favor, ingresa tu número de teléfono.");
        isValid = false;
    } else if (!phonePattern.test(phoneNumber.value.trim())) {
        showError(phoneNumber, "Por favor, ingresa un número de teléfono válido (solo números y espacios).");
        isValid = false;
    }

    // Validación del campo Comentario
    if (comment.value.trim() === "") {
        showError(comment, "Por favor, ingresa tu comentario.");
        isValid = false;
    }

    return isValid;
}

// Función para mostrar el mensaje de error
function showError(inputElement, message) {
    inputElement.classList.add("error");

    // Crear un elemento de mensaje de error
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.innerText = message;

    // Agregar el mensaje de error después del input
    inputElement.parentNode.appendChild(errorMessage);
}

// Función para limpiar los errores previos
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.remove());

    const errorInputs = document.querySelectorAll(".error");
    errorInputs.forEach(input => input.classList.remove("error"));
}
