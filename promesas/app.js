const URL = 'http://jsonplaceholder.typicode.com/todos';


async function getTareas() {
  const resp = await fetch(URL);
  const datos = await resp.json();

  const arrayTareasLI = datos.map((tarea) => {
    return '<li>' + tarea.title + '</li>';
    // return `<li>${tarea.title}</li>`;
  })

  const tareasHTML = arrayTareasLI.join('');
  document.getElementById('listaTareas').innerHTML = tareasHTML;

}

getTareas()

// fetch(URL)
//   .then((resp) => resp.json())
//   .then((datos) => {
//     console.log(datos)

//     datos.map((tarea) => {
//       return '<li>' + tarea.title + '</li>';
//       return `<li>${tarea.title}</li>`;
//     })

//     document.getElementById('listaTareas').innerHTML = tareasHTML;
//   })
