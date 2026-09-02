const boardMatrix = [
    ["♜","♞","♝","♚","♛","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"],
]

const board = document.createElement('div')
board.classList.add('board')

for (let i = 0; i < boardMatrix.length; i++) {
    let row = document.createElement('div')
    row.classList.add('row')

    for (let j = 0; j < boardMatrix[i].length; j++) {
        let cell = document.createElement(`div`)
        cell.classList.add('cell')

        cell.setAttribute('data-row', i)
        cell.setAttribute('data-column', j)

        cell.innerHTML = boardMatrix[i][j]

        row.appendChild(cell)
    }

    board.appendChild(row)
}
document.body.appendChild(board)