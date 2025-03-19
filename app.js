// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarListaAmigos();
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo y mostrarlo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    mostrarResultado(`El amigo sorteado es ${amigoSorteado}`);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSorteado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados anteriores

    const li = document.createElement("li");
    li.textContent = `${amigoSorteado}`;
    resultadoLista.appendChild(li);
}
