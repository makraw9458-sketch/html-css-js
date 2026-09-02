const current_selected_piece = document.getElementsByClassName("highlighted_current");
const current_allowed_cells = document.getElementsByClassName("highlighted");



export const move_piece = (e) => {
    e.target.innerHTML = current_selected_piece[0].innerHTML
    current_selected_piece[0].innerHTML = ""


    document.querySelectorAll('.cell.highlighted').forEach(cell => {
        cell.classList.remove('highlighted');
        // cell.removeEventListener('click', move_piece)
    });
    document.querySelectorAll('.cell.highlighted_current').forEach(cell => {
        cell.classList.remove('highlighted_current');
    });
    document.querySelectorAll('.cell.highlighted_killTarget').forEach(cell => {
        cell.classList.remove('highlighted_killTarget');
    });
}


Array.from(current_allowed_cells).forEach(cell => {
    cell.addEventListener('click', move_piece);
});