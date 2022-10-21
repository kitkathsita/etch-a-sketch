const board = document.querySelector('.board')
const opts = document.querySelectorAll('.opt')
const clearButton = document.querySelector('.clear')
const buttonColors = document.querySelector('.colors')
const buttonEraser = document.querySelector('.eraser')
const buttonRainbow = document.querySelector('.rainbow')
const colorPicker = document.querySelector('#colorChoser')
const allOptions = document.querySelectorAll('.mode')

let actualMode = 'black'
let actualColor = 'black'

let mouse = 0
document.body.onmousedown = () => (mouse = true)
document.body.onmouseup = () => (mouse = false)

buttonColors.onclick = () => (actualMode = 'colors')
buttonEraser.onclick = () => (actualMode = 'eraser')
buttonRainbow.onclick = () => (actualMode = 'rainbow')

function makeGrid() {

  let rows = this.classList[1]
  board.style.setProperty('--grid-rows', rows)
  board.style.setProperty('--grid-cols', rows)

  for (let i = 0; i < (rows * rows); i++) {
    var miniDiv = document.createElement('div')
    miniDiv.classList.add('grid', 'grid-' + i)
    board.appendChild(miniDiv)
  }

  if (actualMode === 'eraser') {
    actualMode = 'black'
  }

  actualModeFunc()
}

function makeInitialGrid() {
  let rows = 16
  board.style.setProperty('--grid-rows', rows)
  board.style.setProperty('--grid-cols', rows)

  for (let i = 0; i < (rows * rows); i++) {
    let miniDiv = document.createElement('div')
    miniDiv.classList.add('grid', 'grid-' + i)
    board.appendChild(miniDiv)
  }
}

makeInitialGrid()

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

function clear() {
  let miniDiv2 = document.querySelectorAll('.grid')
  miniDiv2.forEach(grid => grid.remove())
}

function colorBlack(e) {
  if (e.type === 'mouseover' && !mouse) return
  this.style.backgroundColor = 'black'
}

function colorColors(e) {
  if (e.type === 'mouseover' && !mouse) return
  this.style.backgroundColor = actualColor
}

function colorRainbow(e) {
  if (e.type === 'mouseover' && !mouse) return
  let a = getRandomInt()
  let b = getRandomInt()
  let c = getRandomInt()
  this.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')'
}

function colorEraser(e) {
  if (e.type === 'mouseover' && !mouse) return
  this.style.backgroundColor = 'white'
}

function clearBoard() {
  const miniGrids = document.querySelectorAll('.grid')
  miniGrids.forEach(grid => grid.style.backgroundColor = 'white')
}

function actualModeFunc() {
  buttonColors.onclick = () => (actualMode = 'colors')
  buttonEraser.onclick = () => (actualMode = 'eraser')
  buttonRainbow.onclick = () => (actualMode = 'rainbow')
  colorMode()
}

function colorMode() {

  if (actualMode === 'black') {
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorEraser))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorRainbow))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorEraser))
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBlack))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorBlack))
  }
  else if (actualMode === 'colors') {
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorEraser))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorBlack))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorRainbow))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorEraser))
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorColors))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorColors))
  }
  else if (actualMode === 'rainbow') {
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorEraser))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorBlack))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorEraser))
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorRainbow))
  }
  else if (actualMode === 'eraser') {
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorEraser))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorBlack))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorColors))
    miniGrids.forEach(grid => grid.removeEventListener('mousedown', colorRainbow))
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorEraser))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorEraser))
  }

}

function actualColorfunc(e){
  if (actualMode!='eraser' && actualMode!='rainbow'){
    actualColor = e.target.value
  }
  console.log(actualColor)
}

actualModeFunc()

opts.forEach(opt => opt.addEventListener('click', clear))
opts.forEach(opt => opt.addEventListener('click', makeGrid))

clearButton.addEventListener('click', clearBoard)

allOptions.forEach(mode => mode.addEventListener('click', actualModeFunc))

colorChoser.addEventListener('input', actualColorfunc)