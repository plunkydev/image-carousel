import './style.css'
import { carruselContainer } from './components/carrusel.js'
import { carruselNav } from './components/carruselNav.js'
const main = document.getElementById('main')

main.append(carruselContainer, carruselNav)
