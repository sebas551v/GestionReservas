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
    this.fechaHora = ['09/15/2018',
        '09/16/2018',
        '09/15/2018',
        '09/25/2018',
        '09/30/2018',
        '10/1/2018',
        '10/2/2018',
        '09/13/2018',
        '09/14/2018',
        '08/20/2018',];
    
        this.hora = ['14:00',
        '16:00',
        '16:00',
        '12:00',
        '18:00',
        '17:30',
        '18:00',
        '10:00',
        '8:00',
        '14:00',];

    this.lugar = ['teatro',
        'auditorio 11-101',
        'auditorio 11-102',
        'auditorio 11-101',
        'auditorio 12-412',
        'auditorio 12-410',
        'auditorio 11-101',
        'teatro',
        'teatro',
        'auditorio 12-410']


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
            data += '<th>FECHA</th>';
            data += '<th>HORA</th>';
            data += '<th>LUGAR</th>';
            data += '</tr>';
            for (i = 0; i < this.eventos.length; i++) {
                data += '<tr>';
                data += '<td>' + this.eventos[i] + '</td>';
                data += '<td>' + this.fechaHora[i] + '</td>';
                data += '<td>' + this.hora[i] + '</td>';
                data += '<td>' + this.lugar[i] + '</td>';
                if (this.el) {
                    data += '<td><button onclick="app.editar(' + i + ')">Editar</button></td>';
                    data += '<td><button onclick="app.eliminar(' + i + ')">Eliminar</button></td>';
                }
                data += '</tr>';
            }
        }
        this.contador(this.eventos.length);
        if (this.el) {
            return this.el.innerHTML = data;
        } else {
            return this.li.innerHTML = data;
        }
    };

    this.adicionar = function () {
        el = document.getElementById('agregarEvento');
        lu = document.getElementById('lugar');
        ho = document.getElementById('hora');
        // Obtener el valor
        var evento = el.value;
        var fechaHora = document.getElementById('datepicker').value;
        var hora = ho.value;
        var lugar = lu.value;
        if (evento && fechaHora && lugar && hora) {
            // Adicionar Valor
            this.eventos.push(evento.trim());
            this.fechaHora.push(fechaHora.trim());
            this.hora.push(hora.trim());
            this.lugar.push(lugar.trim());
            // Reset input
            el.value = '';
            //document.getElementById('Fecha').value = '';
            ho.value = '';
            lu.value = '';
            // Mostrar nueva lista
            this.llenarTodo();
        }
    };
    this.editar = function (item) {
        var el = document.getElementById('editarEvento');
        var el2 = document.getElementById('datepickerEdit');
        var el4 = document.getElementById('editarHora');
        var el3 = document.getElementById('editarLugar');
        // Mostrar valor
        el.value = this.eventos[item];
        el2.value = this.fechaHora[item];
        el4.value = this.hora[item];
        el3.value = this.lugar[item];
        // Mostrar campos
        document.getElementById('spoiler').style.display = 'block';
        contexto = this;
        document.getElementById('guardarEdicion').onsubmit = function () {
            // Obtener valores
            var evento = el.value;
            var fechaHora = el2.value;
            var hora = el4.value;
            var lugar = el3.value;
            if (evento && fechaHora && lugar && hora) {
                // Editar valores
                contexto.eventos.splice(item, 1, evento.trim());
                contexto.fechaHora.splice(item, 1, fechaHora.trim());
                contexto.hora.splice(item,1,hora.trim());
                contexto.lugar.splice(item,1,lugar.trim());
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
        this.fechaHora.splice(item, 1);
        this.hora.splice(item, 1);
        this.lugar.splice(item, 1);
        // Mostrar nueva lista
        this.llenarTodo();
    };

}

app.llenarTodo();

function cerrarEdicion() {
    document.getElementById('spoiler').style.display = 'none';
}