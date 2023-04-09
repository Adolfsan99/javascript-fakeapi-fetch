// Definimos la URL de la API que vamos a utilizar.
const API_URL = "https://jsonplaceholder.typicode.com";

// Función que se encarga de generar el HTML a partir de los datos recibidos.
function manejoDePeticiones(datos) {
  // Seleccionamos el elemento HTML donde vamos a insertar la información.
  const generarHTML = document.querySelector("#productos");

  // Creamos un componente HTML por cada elemento recibido en los datos.
  const componenteHTML = datos.map(photo => `
    <li>ID = ${photo.id}, Titulo = ${photo.title}, URL = ${photo.url}</li>
    <img class="img_prod" src="${photo.url}"></img>
    <h4>ID: ${photo.id}</h4>
    <h2>${photo.title}</h2>
    <p class="description">${photo.title} ${photo.title} ${photo.title}</p>
  `);

  // Insertamos los componentes HTML generados dentro del elemento HTML seleccionado.
  generarHTML.innerHTML = `<ul>${componenteHTML}</ul>`;
}

// Realizamos una solicitud a la API utilizando la función fetch().
fetch(`${API_URL}/photos`)
  .then(response => {
    // Verificamos si la respuesta es exitosa.
    if (!response.ok) {
      throw new Error("No se pudo realizar la solicitud a la API");
    }

    // Convertimos la respuesta en un objeto JSON.
    return response.json();
  })
  .then(data => manejoDePeticiones(data)) // Llamamos a la función manejoDePeticiones() para generar el HTML.
  .catch(error => {
    // En caso de error, mostramos un mensaje en la página.
    console.error(error);
    const generarHTML = document.querySelector("#productos");
    generarHTML.innerHTML = `<p>No se pudo obtener la información de la API.</p>`;
  });
