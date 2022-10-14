const board = document.querySelector('.board')
const opts = document.querySelectorAll('.opt')

function makeGrid(){
  let rows = this.classList[1]
  board.style.setProperty('--grid-rows', rows)
  board.style.setProperty('--grid-cols', rows)
  for(let i=0; i<(rows*rows); i++){
    let miniDiv = document.createElement('div')
    miniDiv.classList.add('grid','grid-'+i)
    board.appendChild(miniDiv)
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
}

makeInitialGrid()

function clear(){
  let miniDiv2 = document.querySelectorAll('.grid')
  miniDiv2.forEach(grid => grid.remove())
}

function colorBackground(){
  this.style.backgroundColor = 'black'
}

opts.forEach(opt => opt.addEventListener('click', clear))
opts.forEach(opt => opt.addEventListener('click', makeGrid))

const miniGrids = document.querySelectorAll('.grid')

miniGrids.forEach(grid => grid.addEventListener('mouseover', colorBackground))