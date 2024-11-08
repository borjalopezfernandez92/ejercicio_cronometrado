// HO/a567caracola
// AB12345-7890



function sendMail(){ // Función que recoge el email enviado por el usuario
    let getMailInput = document.getElementById("mailInputId").value; // Get texto introducido en el input del email.
    let getPassInput = document.getElementById("passwordInputId").value


    registrationChecker(getMailInput, getPassInput); // llamamos a función que comprueba datos introducidos
}

function registrationChecker(mail, pass) { // función que comprueba los datos introducidos para el registro.
    event.preventDefault();
    let getMessageDiv = document.getElementById("message");
    if (getMessageDiv){
        getMessageDiv.innerHTML = "";
    }
    let mailChars = /^[\w._]+@[\w.]+\.[a-zA-Z]{2,}$/; // expresión regular para el formato del email.
    let passChars = /^(?=.*[A-Z]){2,}(?=.*[*\/\-\#\~]{1,})(?=.*[5-9]{3,}).{10,15}$/; // expresión regular que comprueba el formato de la contraseña.


    if(!mailChars.test(mail)){
        let messageText = document.createTextNode("Email mal introducido.");
        getMessageDiv.appendChild(messageText);
        getMessageDiv.style = "color: red";
    }else if(!passChars.test(pass)){
        let messageText = document.createTextNode("La contraseña no cumple con los requisitos (1. Al menos dos mayúsculas. 2. Al menos un carácter de los siguientes: * / - # ~ 3. Al menos tres números entre 5 y 9 4. Un tamaño de entre 10 y 15).");
        getMessageDiv.appendChild(messageText);
        getMessageDiv.style = "color: red";
        // alert("La contraseña no cumple con los requisitos (1. Al menos dos mayúsculas.\n2. Al menos un carácter de los siguientes: * / - # ~ \n3. Al menos tres números entre 5 y 9 \n4. Un tamaño de entre 10 y 15).");
    }
     else{
        passwordCheckerPainter();
    }

}

function passwordCheckerPainter() { // función que pinta la zona de introducción de contraseña.
    event.preventDefault();
    let divChecker = document.getElementById("checkerDiv");
    if (divChecker) {
        divChecker.remove();
    }
    let br = document.createElement("br");
    let div = document.createElement("div");
    div.id = "checkerDiv";
    let getMainDiv = document.getElementById("formDiv");
    
    let inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.id = "passwordCheckerId";
    inputPassword.placeholder = "Contraseña de tu email";

    let inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.name = "emailCheck";
    inputMail.id = "emailCheckerId";
    inputMail.placeholder = "Tu email registrado";

    div.appendChild(br);
    div.appendChild(inputMail);
    div.appendChild(inputPassword);
    let comprobarButton = document.createElement("button");
    comprobarButton.setAttribute(`onclick`, `passwordChecker()`);
    comprobarButton.innerText ="Comprobar";
    div.appendChild(comprobarButton);
    let checkerMessageDiv = document.createElement("div");
    checkerMessageDiv.id = "checkerMessage";
    div.appendChild(checkerMessageDiv);
    getMainDiv.appendChild(div);

}


function passwordChecker() {
    event.preventDefault();

    let getMessageDiv = document.getElementById("message");
    let getCheckerMessageDiv = document.getElementById("checkerMessage");
    if (getMessageDiv){
        getMessageDiv.innerHTML = "";
    }
    if (getCheckerMessageDiv){
        getCheckerMessageDiv.innerHTML = "";
    }


    let getEmailChecker = document.getElementById("emailCheckerId").value;
    let getMailInput = document.getElementById("mailInputId").value;
    let getpassChecker = document.getElementById("passwordCheckerId").value;
    let getpassInput = document.getElementById("passwordInputId").value;
    let mailChars = /^[\w._]+@[\w.]+\.[a-zA-Z]{2,}$/; // expresión regular para el formato del email.
    let passChars = /^(?=.*[A-Z]){2,}(?=.*[*\/\-\#\~]{1,})(?=.*[5-9]{3,}).{10,15}$/; // expresión regular que comprueba el formato de la contraseña.

    if(!mailChars.test(getEmailChecker)){
        let messageText = document.createTextNode("Formato del email incorrecto (email@dominio.es,com,etz).");
        getCheckerMessageDiv.appendChild(messageText);
        getCheckerMessageDiv.style = "color: red";

    }else if(!passChars.test(getpassChecker)){
        let messageText = document.createTextNode("La contraseña no cumple con los requisitos (1. Al menos dos mayúsculas. 2. Al menos un carácter de los siguientes: * / - # ~ 3. Al menos tres números entre 5 y 9 4. Un tamaño de entre 10 y 15).");
        getCheckerMessageDiv.appendChild(messageText);
        getCheckerMessageDiv.style = "color: red";
        // alert("La contraseña no cumple con los requisitos (1. Al menos dos mayúsculas.\n2. Al menos un carácter de los siguientes: * / - # ~ \n3. Al menos tres números entre 5 y 9 \n4. Un tamaño de entre 10 y 15).");
    }else{
        if ((getEmailChecker != getMailInput) || (getpassChecker != getpassInput)){
            let messageText = document.createTextNode("Contraseña o emails introducidos no corresponden con la base de datos.");
            getCheckerMessageDiv.appendChild(messageText);
            getCheckerMessageDiv.style = "color: red";

            // alert("Contraseña o emails introducidos no corresponden con la base de datos.")
        }else{
            let messageText = document.createTextNode("Welcome");
            getCheckerMessageDiv.appendChild(messageText);
            getCheckerMessageDiv.style = "color: blue";
            // alert("Welcome.");
        }
    }};
