import { carruselImages } from '../images/imagesExport.js'

const createCarruselNav = () => {
  const carruselNav = document.createElement('div')
  carruselNav.classList.add('carruselNavContainer')
  carruselNav.id = 'carruselNavContainer'
  return carruselNav
}

const createCarruselNavButton = (name, direction, text, action) => {
  const carruselNavButton = document.createElement('button')
  carruselNavButton.classList.add(`carruselNavButton${direction}`)
  carruselNavButton.id = `carruselNavButton${name}`
  carruselNavButton.textContent = text
  carruselNavButton.addEventListener('click', (e) => action())
  return carruselNavButton
}

const navegationImages = () => {
  const navImg = document.createElement('div')
  navImg.classList.add('navImg')
  navImg.id = 'navImg'

  for (let i = 1; i <= carruselImages.length; i++) {
    const navImgSection = document.createElement('div')
    navImgSection.classList.add('navImgSection')
    navImgSection.id = `navImgSection${i}`
    navImg.append(navImgSection)
  }

  return navImg
}

let count = 0
let clicked = 0
const actionLeft = () => {
  if (clicked === 1) {
    const carruselContainer = document.getElementById('carruselContainer')
    count = 0
    clicked = 0
    carruselContainer.style.transform = `translateX(0%)`
  } else if (clicked === 0) {
    const carruselContainer = document.getElementById('carruselContainer')
    const widthCarruselImg = carruselContainer.offsetWidth / carruselImages.length
    const widthCarruselImgPercentage = (widthCarruselImg / carruselContainer.offsetWidth) * 100
    count = (widthCarruselImgPercentage / carruselImages.length) - widthCarruselImgPercentage
    clicked = carruselImages.length - 1
    carruselContainer.style.transition = 'none'
    carruselContainer.style.transform = `translateX(${count}%)`
    count = widthCarruselImgPercentage - widthCarruselImgPercentage / carruselImages.length
  } else {
    const carruselContainer = document.getElementById('carruselContainer')
    const widthCarruselImg = carruselContainer.offsetWidth / carruselImages.length
    const widthCarruselImgPercentage = (widthCarruselImg / carruselContainer.offsetWidth) * 100
    count -= widthCarruselImgPercentage / carruselImages.length
    clicked--
    carruselContainer.style.transition = 'transform 0.5s ease-in-out'
    carruselContainer.style.transform = `translateX(-${count}%)`
  }
}
const actionRight = () => {
  if (clicked === carruselImages.length - 1) {
    const carruselContainer = document.getElementById('carruselContainer')
    count = 0
    clicked = 0
    carruselContainer.style.transition = 'none'
    carruselContainer.style.transform = `translateX(-${count}%)`
  } else {
    const carruselContainer = document.getElementById('carruselContainer')
    const widthCarruselImg = carruselContainer.offsetWidth / carruselImages.length
    const widthCarruselImgPercentage = (widthCarruselImg / carruselContainer.offsetWidth) * 100
    count += widthCarruselImgPercentage / carruselImages.length
    clicked++
    carruselContainer.style.transition = 'transform 0.5s ease-in-out'
    carruselContainer.style.transform = `translateX(-${count}%)`
  }
}

const carruselNav = createCarruselNav()

carruselNav.append(
  createCarruselNavButton('Left', 'Left', '<', actionLeft),
  navegationImages(),
  createCarruselNavButton('Right', 'Right', '>', actionRight)
)

export { carruselNav }
