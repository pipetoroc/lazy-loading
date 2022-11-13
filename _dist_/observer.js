const isIntersecting = (element) => {
  return element.isIntersecting
}

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.querySelector('img');
  const url = image.dataset.src;

  image.src = url;

  observer.unobserve(container);
}

const observer = new IntersectionObserver((allElements) => {
  allElements.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (image) => {
  observer.observe(image);
};