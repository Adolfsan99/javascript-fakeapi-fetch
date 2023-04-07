// Esta línea define una constante llamada API_URL que contiene la dirección web 
// de una API que se va a utilizar en el código.
const API_URL = "https://jsonplaceholder.typicode.com";

// Esta línea crea una nueva instancia del objeto XMLHttpRequest que se 
// va a utilizar para hacer una solicitud a la API.
const httpRequest = new XMLHttpRequest();

// Esta es una función que se va a ejecutar cuando 
// la solicitud a la API se haya completado y 
// se haya recibido una respuesta.
function manejoDePeticiones() {

  // Esta condición verifica si la solicitud se ha completado con éxito 
  // y la respuesta tiene un estado 200 (OK).
  if (this.readyState == 4 && this.status == 200) {

    // Si la respuesta es correcta, se convierte en un objeto 
    // JavaScript utilizando JSON.parse().
    const datos = JSON.parse(this.responseText);

    // Se selecciona un elemento HTML con el id "productos".
    const generarHTML = document.querySelector("#productos");

    // Se crea una plantilla de HTML utilizando 
    // los datos recibidos de la API.
    const plantilla = datos.map(photo => `
    
    <li>ID = ${photo.id}, Titulo = ${photo.title}, URL = ${photo.url}</li>
    
    <img class="img_prod" src="${photo.url}"></img>
    <h4>ID: ${photo.id}</h4>
    <h2>${photo.title}</h2>
     <p class="description">${photo.title} ${photo.title} ${photo.title}</p>

    `);

    // Se inserta la plantilla de HTML generada dentro del elemento HTML seleccionado anteriormente.
    generarHTML.innerHTML = `<ul>${plantilla}</ul>`;

  }
}

// Esta línea añade un evento "load" al objeto XMLHttpRequest, lo que significa que cuando 
// la solicitud a la API se complete, se ejecutará la función manejoDePeticiones().
httpRequest.addEventListener("load", manejoDePeticiones);

// Esta línea abre una solicitud GET a la API utilizando la dirección web 
// definida anteriormente y el recurso "photos".
httpRequest.open("GET", `${API_URL}/photos`);

// Esta línea envía la solicitud a la API.
httpRequest.send();