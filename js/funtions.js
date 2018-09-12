var users = ["sebas@gmail.com", "luis@gmail.com", "jose@gmail.com"]
var passes = ["123", "luisesgay", "456"]
var permits = ["admin", "admin", "admin"]

function regresar() {
    window.location.href = "index.html";
}

function ingresar() {
    var usuario = document.getElementById('inputUser').value;
    var contrasena = document.getElementById('inputPassword').value;
    var index = -1;
    if (usuario && contrasena) {
        for (i = 0; i < this.users.length; i++) {
            if (users[i] == usuario) {
                index = i;
                break
            }
        }
        if (index < 0) {
            alert("No existe usuario");
        } else {
            if (passes[index] == contrasena) {
                if (permits[index] == "admin") {
                    window.location.href = "index2.html";
                } else {
                    window.location.href = "lista.html";
                }
            } else {
                alert("Porfavor ingrese nombre de usuario y contraseña correctos.");
            }
        }
    } else {
        alert("Porfavor ingrese nombre de usuario y contraseña correctos.");
    }
}

function deshabilitaRetroceso(){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
}