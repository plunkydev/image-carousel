import './style.css'
import { carruselContainer } from './components/carrusel.js'
import { carruselNav, actionRight } from './components/carruselNav.js'
const main = document.getElementById('main')

setInterval(actionRight, 5000)

main.append(carruselContainer, carruselNav)
