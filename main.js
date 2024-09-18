let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar')
let constrasena = document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]:;<>,.?/~`';
function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password += caracterAleatorio;
    }

    constrasena.value = password;

    if (!esFuerte(password)) {
        alert("La contraseña es débil. Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.");
    } else {
        contrasena.value = password;
    }

}

function esFuerte(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

function limpiar() {
    contrasena.value = ""; // Set the value of the contraseña input to an empty string
}










