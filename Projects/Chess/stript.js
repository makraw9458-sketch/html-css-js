import { findAllowedPositions, pieceSymbol_to_pieceNameAndTeam_mapper } from "./AllowedMovements.js";

const cells = document.getElementsByClassName("cell");

const SelectAllowedCells = (e) => {
    if (e.target.innerHTML == "") {
        return
    }

    const allowedCells = findAllowedPositions(e.target.innerHTML, e.target.dataset.row, e.target.dataset.column)

    // Remove highlight from any previously selected cell
    document.querySelectorAll('.cell.highlighted').forEach(cell => {
        cell.classList.remove('highlighted');
    });
    document.querySelectorAll('.cell.highlighted_current').forEach(cell => {
        cell.classList.remove('highlighted_current');
    });
    document.querySelectorAll('.cell.highlighted_killTarget').forEach(cell => {
        cell.classList.remove('highlighted_killTarget');
    });
    

    e.target.classList.add('highlighted_current')
    allowedCells.forEach(allowedCell => {
        Array.from(cells).forEach(cell => {
            if (cell.dataset.column == allowedCell.column & cell.dataset.row == allowedCell.row) {
                    // Add highlight to the clicked cell
                    cell.classList.add('highlighted');
            }
        })
    })
}

// Add event listeners to each cell
Array.from(cells).forEach(cell => {
    cell.addEventListener('click', SelectAllowedCells);
});