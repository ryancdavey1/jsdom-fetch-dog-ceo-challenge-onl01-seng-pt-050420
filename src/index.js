console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener("DOMContentLoaded", () => {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => console.log(json))
});

function renderImages(images) {
  const c = document.getElementById("dog-image-container")
  images.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    c.appendChild(img)
  })
}