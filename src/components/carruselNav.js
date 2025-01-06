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

const imgSingleWidth = () => {
  let width = 0
  const carruselContainer = document.getElementById('carruselContainer')
  const widthCarruselImg = carruselContainer.offsetWidth / carruselImages.length
  const widthCarruselImgPercentage = (widthCarruselImg / carruselContainer.offsetWidth) * 100
  width = widthCarruselImgPercentage - widthCarruselImgPercentage / carruselImages.length
  let redondeado = Math.round(width * Math.pow(10, 4)) / Math.pow(10, 4)
  return redondeado / (carruselImages.length - 1)
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
  const carruselContainer = document.getElementById('carruselContainer')
  count += imgSingleWidth()
  clicked++
  if (count === imgSingleWidth() * carruselImages.length) {
    count = 0
    clicked = 0
    carruselContainer.style.transition = 'none'
    carruselContainer.style.transform = `translateX(-${count}%)`
  } else {
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
      const carruselContainer = document.getElementById('carruselContainer')
      clicked = 0 + (i + 1)
      current = 0 + i
      count = 0
      count = current * imgSingleWidth()
      carruselContainer.style.transition = 'transform 0.5s ease-in-out'
      carruselContainer.style.transform = `translateX(-${count}%)`
      const allNavImgSection = document.querySelectorAll('.navImgSection')
      for (let index = 0; index < allNavImgSection.length; index++) {
        const navBotton = document.getElementById(`navImgSection${index + 1}`)
        navBotton.style.backgroundColor = 'var(--back-ground-color-hover)'
        navBotton.style.width = '32px'
        navBotton.style.height = '32px'
        if (navBotton.id === `navImgSection${current + 1}`) {
          const navBotton = document.getElementById(`navImgSection${current + 1}`)
          navBotton.style.backgroundColor = 'var(--back-ground-color)'
          navBotton.style.width = '42px'
          navBotton.style.height = '42px'
          navBotton.addEventListener('mouseout', () => {
            navBotton.style.backgroundColor = 'var(--back-ground-color)'
            navBotton.style.width = '42px'
            navBotton.style.height = '42px'
          })
        }
      }
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
}

window.addEventListener('load', () => vewiamgeBar(clicked))

const carruselNav = createCarruselNav()

carruselNav.append(
  createCarruselNavButton('Left', 'Left', '<', actionLeft),
  navegationImages(),
  createCarruselNavButton('Right', 'Right', '>', actionRight)
)

export { carruselNav, actionRight }
