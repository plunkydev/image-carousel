import { carruselImages } from '../images/imagesExport.js'

let count = 0
let clicked = 0

const createCarruselNav = () => Object.assign(document.createElement('div'), {
  className: 'carruselNavContainer',
  id: 'carruselNavContainer'
})

const createCarruselNavButton = (name, direction, text, action) => {
  const carruselNavButton = Object.assign(document.createElement('button'), {
    className: `carruselNavButton${direction}`,
    id: `carruselNavButton${name}`,
    textContent: text
  })
  carruselNavButton.addEventListener('click', action)
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

const actionLeft = () => {
  const carruselContainer = document.getElementById('carruselContainer')
  const widthCarruselImg = carruselContainer.offsetWidth / carruselImages.length
  const widthCarruselImgPercentage = (widthCarruselImg / carruselContainer.offsetWidth) * 100

  if (clicked === 0) {
    count = widthCarruselImgPercentage - widthCarruselImgPercentage / carruselImages.length
    clicked = carruselImages.length - 1
    carruselContainer.style.transition = 'none'
  } else {
    count -= widthCarruselImgPercentage / carruselImages.length
    clicked--
    carruselContainer.style.transition = 'transform 0.5s ease-in-out'
  }

  carruselContainer.style.transform = `translateX(-${count}%)`
  vewiamgeBar(clicked)
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
  vewiamgeBar(clicked)
}

const vewiamgeBar = (current) => {
  const allNavImgSection = document.querySelectorAll('.navImgSection')

  for (let i = 0; i < allNavImgSection.length; i++) {
    const navImgSection = document.getElementById(`navImgSection${i + 1}`)
    navImgSection.style.backgroundColor = 'var(--back-ground-color-hover)'
    navImgSection.style.width = '32px'
    navImgSection.style.height = '32px'
    navImgSection.addEventListener('mouseover', () => {
      navImgSection.style.backgroundColor = 'var(--back-ground-color)'
      navImgSection.style.width = '42px'
      navImgSection.style.height = '42px'
    })
    navImgSection.addEventListener('mouseout', () => {
      navImgSection.style.backgroundColor = 'var(--back-ground-color-hover)'
      navImgSection.style.width = '32px'
      navImgSection.style.height = '32px'
    })

    navImgSection.addEventListener('click', () => {
      clicked = i
      current = i
      vewiamgeBar(i)
    })
    if (navImgSection.id === `navImgSection${current + 1}`) {
      const navImgSection = document.getElementById(`navImgSection${current + 1}`)
      navImgSection.style.backgroundColor = 'var(--back-ground-color)'
      navImgSection.style.width = '42px'
      navImgSection.style.height = '42px'
      navImgSection.addEventListener('mouseout', () => {
        navImgSection.style.backgroundColor = 'var(--back-ground-color)'
        navImgSection.style.width = '42px'
        navImgSection.style.height = '42px'
      })
    }
  }
  console.log(current + 1)
}
window.addEventListener('load', () => vewiamgeBar(clicked))

const carruselNav = createCarruselNav()

carruselNav.append(
  createCarruselNavButton('Left', 'Left', '<', actionLeft),
  navegationImages(),
  createCarruselNavButton('Right', 'Right', '>', actionRight)
)

export { carruselNav }
