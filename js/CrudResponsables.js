var app= new function () {
    this.el = document.getElementById('tablaResponsables');
    this.li = document.getElementById('lista');
    this.nombres = ['Luis Felipe Garcia',
        'Sebastián Ramirez David',
        'Jose Miguel Mejia',
        'Santiago Urrego',
        'Juan Esteban Quintero',
        'Federico Gutierrez',
        'Valter Zuliani',
        'Cristian Yesid  S.A',
        'Jose Alberto Rua ',
        'Gloria Gasca'];
    this.areas = ['Programa de Ingeniería de Sistemas',
        'Facultad de Ciencias Básicas',
        'Programa de Ingeniería Civil',
        'Facultad de Derecho',
        'Facultad del Desparche',
        'Alcaldía de Medellín',
        'Fundación Creeme',
        'Maestría en Derecho Procesal',
        'Facultad de Ciencias Báscias',
        'Facultad de Ingenierías',];
    this.telefonos = ['3108455310',
        '3012453045',
        '3157893521',
        '3154215768',
        '3125448287',
        '3217486124',
        '3012585248',
        '3125241484',
        '3201512781',
        '3212554574',];

    this.contador = function (data) {
        var el = document.getElementById('contador');
        var nombre = 'Responsables ';
        if (data) {
            if (data > 1) {
                nombre = 'Responsables';
            }
            el.innerHTML = data + ' ' + nombre;
        } else {
            el.innerHTML = 'Ningún ' + nombre + ' Responsable ';
        }
    };

    this.llenarTodo = function () {
        var data = '';
        if (this.nombres.length > 0) {
            data += '<tr>';
            data += '<th>NOMBRE</th>';
            data += '<th>AREA</th>';
            data += '<th>TELEFONO</th>';
            data += '</tr>';
            for (i = 0; i < this.nombres.length; i++) {
                data += '<tr>';
                data += '<td>' + this.nombres[i] + '</td>';
                data += '<td>' + this.areas[i] + '</td>';
                data += '<td>' + this.telefonos[i] + '</td>';
                if (this.el) {
                    data += '<td><button onclick="app.editar(' + i + ')">Editar</button></td>';
                    data += '<td><button onclick="app.eliminar(' + i + ')">Eliminar</button></td>';
                }
                data += '</tr>';
            }
        }
        this.contador(this.nombres.length);
        if(this.el){
            return this.el.innerHTML = data;
        }else{
            return this.li.innerHTML = data;
        }        
    };

    this.adicionar = function () {
        el = document.getElementById('nombre');
        // Obtener el valor
        var nombre = el.value;
        var area = document.getElementById('area').value;
        var telefono= document.getElementById('telefono').value;

        if (nombre && area && telefono) {
            // Adicionar Valor
            this.nombres.push(nombre.trim());
            this.areas.push(area.trim());
            this.telefonos.push(telefono.trim());
            // Reset input
            el.value = '';
            document.getElementById('responsable').value = '';
            document.getElementById('telefono').value='';
            // Mostrar nueva lista
            this.llenarTodo();
        }
    };
    this.editar = function (item) {
        var el = document.getElementById('editarNombre');
        var el2 = document.getElementById('editarArea');
        var el3 = document.getElementById('editarTelefono');
        // Mostrar valor
        el.value = this.nombres[item];
        el2.value = this.areas[item];
        el3.value = this.telefonos[item];

        // Mostrar campos
        document.getElementById('spoiler').style.display = 'block';
        contexto = this;
        document.getElementById('guardarEdicion').onsubmit = function () {
            // Obtener valores
            var nombre = el.value;
            var area = el2.value;
            var telefono = el3.value;

            if (nombre && area && telefono  ) {
                // Editar valores
                contexto.nombres.splice(item, 1, nombre.trim());
                contexto.areas.splice(item, 1, area.trim());
                contexto.telefonos.splice(item, 1, telefono.trim());
                // Mostrar nueva lista
                contexto.llenarTodo();
                // Esconder campos
                cerrarEdicion();
            }
        }
    };
    this.eliminar = function (item) {
        // Eliminar fila
        this.nombres.splice(item, 1);
        this.areas.splice(item, 1);
        this.telefonos.splice(item, 1);

        // Mostrar nueva lista
        this.llenarTodo();
    };

}

app.llenarTodo();

function cerrarEdicion() {
    document.getElementById('spoiler').style.display = 'none';
}