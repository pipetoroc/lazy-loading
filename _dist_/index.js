import { registerImage } from "./observer.js";
const URL_API = 'https://api.unsplash.com/photos/random?client_id=788yWKwO-wwl6ZmtksfEkSIFmipbBuCPoUiS0c33itg'

// fetch(URL_API)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     data.forEach(element => {
//       const figure = document.createElement('figure');
//       figure.className = 'p-4';
//       figure.className = 'mt-6';
//       const img = document.createElement('img');
//       img.className = 'mx-auto';
//       img.width = '320';
//       img.src = element.urls.regular;

//       figure.appendChild(img);

//       mountNode.appendChild(figure);
//       registerImage(figure)
//       })
//     });

const mountNode = document.getElementById('imagenes');

async function loadPicture (id) {
  const response = await fetch(URL_API, {
    method: 'GET',
  })
  const data = await response.json();
  console.log(data)

  const figure = document.createElement('figure');
  figure.className = 'p-4 mt-6'

  const img = document.createElement('img');
  img.className = 'mx-auto'
  img.width = '320'
  img.src = data.urls.regular;

  figure.appendChild(img);
  mountNode.appendChild(figure);
  registerImage(figure)
}

const addImage = document.querySelector('button');
addImage.addEventListener('click', loadPicture);
