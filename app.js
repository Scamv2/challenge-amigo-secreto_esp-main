// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este amigo ya ha sido agregado.');
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    inputAmigo.value = '';
}


function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de volver a cargarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para realizar el sorteo.');
        return;
    }

    // Copiar la lista de amigos para el sorteo
    let amigosDisponibles = [...amigos];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    amigos.forEach(amigo => {
        let indiceAmigoSecreto;
        let amigoSecreto;

        // Asegurar que no se sortee a sí mismo
        do {
            indiceAmigoSecreto = Math.floor(Math.random() * amigosDisponibles.length);
            amigoSecreto = amigosDisponibles[indiceAmigoSecreto];
        } while (amigo === amigoSecreto && amigosDisponibles.length > 1);

        // Eliminar el amigo secreto seleccionado para que no se repita
        amigosDisponibles.splice(indiceAmigoSecreto, 1);

        // Mostrar el resultado
        const li = document.createElement('li');
        li.textContent = `${amigo} le ha tocado: ${amigoSecreto}`;
        resultado.appendChild(li);
    });
}
