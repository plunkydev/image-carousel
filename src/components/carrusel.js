import { carruselImages } from '../images/imagesExport.js'
const carruselContainer = document.createElement('div')
carruselContainer.classList.add('carruselContainer')
carruselContainer.id = 'carruselContainer'

for (let i = 0; i < carruselImages.length; i++) {
  const sectionImg = document.createElement('section')
  const carruselImage = document.createElement('img')
  sectionImg.classList.add('sectionImg')
  carruselImage.classList.add('carruselImage')
  carruselImage.alt = 'carruselImage'
  carruselImage.id = `carruselImage${i + 1}`
  carruselImage.src = carruselImages[i]
  sectionImg.append(carruselImage)
  carruselContainer.append(sectionImg)
}

export { carruselContainer }
