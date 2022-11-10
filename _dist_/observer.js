const isIntersecting = (element) => {
  return element.isIntersecting
}

const accion = (entry) => {
  const nodo = entry.target;
  console.log('Todo bien');

  observer.unobserve(nodo);
}

const observer = new IntersectionObserver((allElements) => {
  allElements.filter(isIntersecting).forEach(accion)
})

export const registerImage = (image) => {
  observer.observe(image);
};