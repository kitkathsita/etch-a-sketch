const board = document.querySelector('.board')
const opts = document.querySelectorAll('.opt')
const clearButton = document.querySelector('.clear')
const buttonColors = document.querySelector('.colors')
const buttonEraser = document.querySelector('.eraser')
const buttonRainbow = document.querySelector('.rainbow')

const allOptions = document.querySelectorAll('.mode')

let actualMode = 'black'

let mouse = false
document.body.onmousedown = () => (mouse = true)
document.body.onmouseup = () => (mouse = false)

buttonColors.onclick = () => (actualMode = 'colors')
buttonEraser.onclick = () => (actualMode = 'eraser')
buttonRainbow.onclick = () => (actualMode = 'rainbow')

function makeGrid(){

  let rows = this.classList[1]
  board.style.setProperty('--grid-rows', rows)
  board.style.setProperty('--grid-cols', rows)

  for(let i=0; i<(rows*rows); i++){
    var miniDiv = document.createElement('div')
    miniDiv.classList.add('grid','grid-'+i)
    board.appendChild(miniDiv)
  }

  // allOptions.forEach(mode => mode.addEventListener('mouseover', ColorMode))

  // console.log(actualMode)

//   if (actualMode==='black'){
//     const miniGrids = document.querySelectorAll('.grid')
//     miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBlack))
//     miniGrids.forEach(grid => grid.addEventListener('mousedown', colorBlack))
//   }
//   else if (actualMode==='colors'){
//     const miniGrids = document.querySelectorAll('.grid')
//     miniGrids.forEach(grid => grid.addEventListener('mouseover', colorColors))
//     miniGrids.forEach(grid => grid.addEventListener('mousedown', colorColors))
//   }
//   else if (actualMode==='rainbow'){
//     const miniGrids = document.querySelectorAll('.grid')
//     miniGrids.forEach(grid => grid.addEventListener('mouseover', colorRainbow))
//     miniGrids.forEach(grid => grid.addEventListener('mousedown', colorRainbow))
//   }
//   else if (actualMode==='eraser'){
//     const miniGrids = document.querySelectorAll('.grid')
//     miniGrids.forEach(grid => grid.addEventListener('mouseover', colorEraser))
//     miniGrids.forEach(grid => grid.addEventListener('mousedown', colorEraser))
//   }
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

  // if (actualMode==='black'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBlack))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorBlack))
  // }
  // else if (actualMode==='colors'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorColors))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorColors))
  // }
  // else if (actualMode==='rainbow'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorRainbow))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorRainbow))
  // }
  // else if (actualMode==='eraser'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorEraser))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorEraser))
  // }
}

makeInitialGrid()

function clear(){
  let miniDiv2 = document.querySelectorAll('.grid')
  miniDiv2.forEach(grid => grid.remove())
}

function colorBlack(e){
  if (e.type==='mouseover' && !mouse) return
  this.style.backgroundColor = 'black'
}

function colorColors(e){
  if (e.type==='mouseover' && !mouse) return
  this.style.backgroundColor = 'purple'
}

function colorRainbow(e){
  if (e.type==='mouseover' && !mouse) return
  this.style.backgroundColor = 'pink'
}

function colorEraser(e){
  if (e.type==='mouseover' && !mouse) return
  this.style.backgroundColor = 'white'
}

function clearBoard(){
  const miniGrids = document.querySelectorAll('.grid')
  miniGrids.forEach(grid => grid.style.backgroundColor = 'white')
}

function actualModeFunc(){

  // if (this.classList[1]==='colors'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorColors))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorColors))
  // }
  // else if (this.classList[1]==='rainbow'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorRainbow))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorRainbow))
  // }
  // else if (this.classList[1]==='eraser'){
  //   const miniGrids = document.querySelectorAll('.grid')
  //   miniGrids.forEach(grid => grid.addEventListener('mouseover', colorEraser))
  //   miniGrids.forEach(grid => grid.addEventListener('mousedown', colorEraser))
  // }
  buttonColors.onclick = () => (actualMode = 'colors')
  buttonEraser.onclick = () => (actualMode = 'eraser')
  buttonRainbow.onclick = () => (actualMode = 'rainbow')

  colorMode()

  // mouse === false
  
}

function colorMode(){

  console.log(actualMode)

  if (actualMode==='black'){
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBlack))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorBlack))
  }
  else if (actualMode==='colors'){
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorColors))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorColors))
  }
  else if (actualMode==='rainbow'){
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorRainbow))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorRainbow))
  }
  else if (actualMode==='eraser'){
    const miniGrids = document.querySelectorAll('.grid')
    miniGrids.forEach(grid => grid.addEventListener('mouseover', colorEraser))
    miniGrids.forEach(grid => grid.addEventListener('mousedown', colorEraser))
  }
}

opts.forEach(opt => opt.addEventListener('click', clear))
opts.forEach(opt => opt.addEventListener('click', makeGrid))

clearButton.addEventListener('click', clearBoard)

allOptions.forEach(mode => mode.addEventListener('click', actualModeFunc))

// buttonColors.addEventListener('click', colorColors)

