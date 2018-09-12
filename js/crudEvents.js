var app = new function () {
    this.el = document.getElementById('eventos');
    this.li = document.getElementById('lista');
    this.eventos = ['Seminario Internacional de Ciencias de la Computación',
        'Congreso Internacional de Formación y Modelación en Ciencias Básicas',
        'Simposion Internacional de Pavimentos',
        'Reunión de Profesores',
        'Congreso de Tapitas Usadas',
        'Reunión de las Naciones Unidas',
        'Presentación SUSO',
        'Congreso Internacional de Derecho Procesal',
        'Reunión Latinoamericanda de Matemática Educativa',
        'XII Salón del Inversionista'];
    this.responsables = ['Programa de Ingeniería de Sistemas',
        'Facultad de Ciencias Básicas',
        'Programa de Ingeniería Civil',
        'Facultad de Derecho',
        'Facultad del Desparche',
        'Alcaldía de Medellín',
        'Fundación Creeme',
        'Maestría en Derecho Procesal',
        'Facultad de Ciencias Báscias',
        'Facultad de Ingenierías',];

        

    this.contador = function (data) {
        var el = document.getElementById('contador');
        var nombre = 'evento';
        if (data) {
            if (data > 1) {
                nombre = 'eventos';
            }
            el.innerHTML = data + ' ' + nombre;
        } else {
            el.innerHTML = 'Ningún ' + nombre + ' programado';
        }
    };

    this.llenarTodo = function () {
        var data = '';
        if (this.eventos.length > 0) {
            data += '<tr>';
            data += '<th>EVENTO</th>';
            data += '<th>RESPONSABLE</th>';
            data += '</tr>';
            for (i = 0; i < this.eventos.length; i++) {
                data += '<tr>';
                data += '<td>' + this.eventos[i] + '</td>';
                data += '<td>' + this.responsables[i] + '</td>';
                if (this.el) {
                    data += '<td><button onclick="app.editar(' + i + ')">Editar</button></td>';
                    data += '<td><button onclick="app.eliminar(' + i + ')">Eliminar</button></td>';
                }
                data += '</tr>';
            }
        }
        this.contador(this.eventos.length);
        if(this.el){
            return this.el.innerHTML = data;
        }else{
            return this.li.innerHTML = data;
        }        
    };

    this.adicionar = function () {
        el = document.getElementById('agregarEvento');
        // Obtener el valor
        var evento = el.value;
        var responsable = document.getElementById('responsable').value;
        if (evento && responsable) {
            // Adicionar Valor
            this.eventos.push(evento.trim());
            this.responsables.push(responsable.trim());
            // Reset input
            el.value = '';
            document.getElementById('responsable').value = '';
            // Mostrar nueva lista
            this.llenarTodo();
        }
    };
    this.editar = function (item) {
        var el = document.getElementById('editarEvento');
        var el2 = document.getElementById('editarResponsable');
        // Mostrar valor
        el.value = this.eventos[item];
        el2.value = this.responsables[item];
        // Mostrar campos
        document.getElementById('spoiler').style.display = 'block';
        contexto = this;
        document.getElementById('guardarEdicion').onsubmit = function () {
            // Obtener valores
            var evento = el.value;
            var responsable = el2.value;
            if (evento && responsable) {
                // Editar valores
                contexto.eventos.splice(item, 1, evento.trim());
                contexto.responsables.splice(item, 1, responsable.trim());
                // Mostrar nueva lista
                contexto.llenarTodo();
                // Esconder campos
                cerrarEdicion();
            }
        }
    };
    this.eliminar = function (item) {
        // Eliminar fila
        this.eventos.splice(item, 1);
        this.responsables.splice(item, 1);
        // Mostrar nueva lista
        this.llenarTodo();
    };

}

app.llenarTodo();

function cerrarEdicion() {
    document.getElementById('spoiler').style.display = 'none';
}