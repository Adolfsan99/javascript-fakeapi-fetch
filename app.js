/*Básicamente, el código obtiene los datos de la API FakeStore, crea un HTML 
por cada producto obtenido, y los inserta dentro de un 
elemento HTML en la página web.*/

// Definimos la URL de la API que vamos a utilizar.
const url = "https://fakestoreapi.com";

// Seleccionamos el elemento HTML donde vamos a insertar la información.
const contenedorHtml = document.querySelector("#productos");

// Función que se encarga de generar el HTML a partir de los datos recibidos.
const traerDatos = datos => {
  // Creamos un componente HTML por cada elemento recibido en los datos.
  const productoHTML = datos.map(producto => `
    <div class="card">
      <img src="${producto.image}" alt="${producto.title}">
      <div class="card-body">
        <h5 class="card-title">${producto.title}</h5>
        <p class="card-text">${producto.description}</p>
        <p class="card-text">Category: ${producto.category}</p>
        <p class="card-text">Price: ${producto.price}</p>
        <p class="card-text">Rating: ${producto.rating}</p>
      </div>
    </div>
  `);

  // Insertamos los componentes HTML generados dentro del elemento HTML seleccionado.
  contenedorHtml.innerHTML = productoHTML.join("");
};

// Realizamos una solicitud a la API utilizando la función fetch().
fetch(`${url}/products`)
  .then(response => {
    // Verificamos si la respuesta es exitosa.
    if (!response.ok) {
      throw new Error("No se pudo realizar la solicitud a la API");
    }

    // Convertimos la respuesta en un objeto JSON.
    return response.json();
  })
  .then(traerDatos) // Llamamos a la función traerDatos() para generar el HTML.
  .catch(error => {
    // En caso de error, mostramos un mensaje en la página.
    console.error(error);
    contenedorHtml.innerHTML = "<p>No se pudo obtener la información de la API.</p>";
  });
