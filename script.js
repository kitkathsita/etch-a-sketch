const board = document.querySelector('.board')
const opts = document.querySelectorAll('.opt')
const clearButton = document.querySelector('.clear')
const buttonsModes = document.querySelectorAll('.mode')

let actualMode = 'black'

let mouse = 0
document.body.onmousedown = () => (mouse = true)
document.body.onmouseup = () => (mouse = false)


buttonsModes.forEach(mode => mode.addEventListener('click', actualModeFunc))

function makeGrid(){
  let rows = this.classList[1]
  board.style.setProperty('--grid-rows', rows)
  board.style.setProperty('--grid-cols', rows)

  for(let i=0; i<(rows*rows); i++){
    var miniDiv = document.createElement('div')
    miniDiv.classList.add('grid','grid-'+i)
    board.appendChild(miniDiv)
  }

  let newMode = actualMode

  console.log(newMode)

  if (newMode==='black'){
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBackground))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorBackground))
  }
  else if (newMode==='rainbow'){
    console.log('hola')
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorRainbow))
  }
}

function makeInitialGrid(){
  let rows = 16
  board.style.setProperty('--grid-rows', rows)
  board.style.setProperty('--grid-cols', rows)

  for(let i=0; i<(rows*rows); i++){
    let miniDiv = document.createElement('div')
    miniDiv.classList.add('grid','grid-'+i)
    board.appendChild(miniDiv)
  }

  if (actualMode==='black'){
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBackground))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorBackground))
  }
}

makeInitialGrid()

function clear(){
  let miniDiv2 = document.querySelectorAll('.grid')
  miniDiv2.forEach(grid => grid.remove())
}

function colorBackground(e){
  if (e.type==='mouseover' && !mouse) return
  this.style.backgroundColor = 'black'
}

function colorRainbow(e){
  if (e.type==='mouseover' && !mouse) return
  this.style.backgroundColor = 'pink'
}

function clearBoard(){
  const miniGrids = document.querySelectorAll('.grid')
  miniGrids.forEach(grid => grid.style.backgroundColor = 'white')
}

function actualModeFunc(){
  var actualMode = this.classList[1]
  //console.log(actualMode)
  return actualMode
}

opts.forEach(opt => opt.addEventListener('click', clear))
opts.forEach(opt => opt.addEventListener('click', makeGrid))

clearButton.addEventListener('click', clearBoard)
  

