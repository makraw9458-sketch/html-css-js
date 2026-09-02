export const pieceSymbol_to_pieceNameAndTeam_mapper = (pieceSymbol) =>{
    let pieceSymbol_and_team;

    switch (pieceSymbol) {
        // Black
        case "♜":
            pieceSymbol_and_team = {
                "team":"black",
                "pieceName":"rook"
            }
            break;

        case "♞":
            pieceSymbol_and_team = {
                "team":"black",
                "pieceName":"knight"
            }
            break;

        case "♝":
            pieceSymbol_and_team = {
                "team":"black",
                "pieceName":"bishop"
            }
            break;

        case "♛":
            pieceSymbol_and_team = {
                "team":"black",
                "pieceName":"queen"
            }
            break;

        case "♚":
            pieceSymbol_and_team = {
                "team":"black",
                "pieceName":"king"
            }
            break;

        case "♟":
            pieceSymbol_and_team = {
                "team":"black",
                "pieceName":"pawn"
            }
            break;


        // white
        case "♔":
            pieceSymbol_and_team = {
                "team":"white",
                "pieceName":"king"
            }
            break;

        case "♕":
            pieceSymbol_and_team = {
                "team":"white",
                "pieceName":"queen"
            }
            break;

        case "♗":
            pieceSymbol_and_team = {
                "team":"white",
                "pieceName":"bishop"
            }
            break;

        case "♘":
            pieceSymbol_and_team = {
                "team":"white",
                "pieceName":"knight"
            }
            break;

        case "♖":
            pieceSymbol_and_team = {
                "team":"white",
                "pieceName":"rook"
            }
            break;

        case "♙":
            pieceSymbol_and_team = {
                "team":"white",
                "pieceName":"pawn"
            }
            break;
    

        default:
            alert("unexpected symbol")
            break;
    }

    return pieceSymbol_and_team
}

export const findAllowedPositions = (piece, position_row, position_column) => {
    const pieceName_and_team = pieceSymbol_to_pieceNameAndTeam_mapper(piece)
    
    // Piece details
    const name = pieceName_and_team.pieceName
    const team = pieceName_and_team.team
    const row = Number(position_row)
    const column = Number(position_column)
    
    // PAWN
    if (name === "pawn") {
        let allowedMovements = [];
        // black
        if (team === "black") {
            if (row === 2) {
                for (let i = 1; i <= 2; i++) {
                    if (document.querySelector(`[data-row="${row+i}"]`) === null || document.querySelector(`[data-row="${row+i}"]`).innerHTML != "") {
                        // Blocking pieces and out of board cells handling
                        break
                    }
                    allowedMovements = [...allowedMovements, {"row":row+i, "column":column}]
                }
            }else{
                if (document.querySelector(`[data-row="${row+1}"]`) != null && document.querySelector(`[data-row="${row+1}"]`).innerHTML === "") {
                    // Blocking pieces and out of board cells handling
                    allowedMovements = [
                        {"row":row+1, "column":column},
                    ]
                }
            }
        }

        // white
        if (team === "white") {
            if (row === 7) {
                // piece is at initial position
                for (let i = 1; i <= 2; i++) {
                    if (document.querySelector(`[data-row="${row-i}"]`) === null || document.querySelector(`[data-row="${row-i}"]`).innerHTML != "") {
                        // Blocking pieces and out of board cells handling
                        break
                    }
                    allowedMovements = [...allowedMovements, {"row":row-i, "column":column}]
                }
            }else{
                if (document.querySelector(`[data-row="${row-1}"]`) != null && document.querySelector(`[data-row="${row-1}"]`).innerHTML === "") {
                    allowedMovements = [
                        {"row":row-1, "column":column},
                    ]
                }
            }
        }

        return allowedMovements
    }

    // KNIGHT
    if (name === "knight") {
        let allowedMovements = []

        if (document.querySelector(`[data-row="${row+1}"][data-column="${column+2}"]`) != null && document.querySelector(`[data-row="${row+1}"][data-column="${column+2}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+1, "column":column+2}]
        }
        if (document.querySelector(`[data-row="${row+2}"][data-column="${column+1}"]`) != null && document.querySelector(`[data-row="${row+2}"][data-column="${column+1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+2, "column":column+1}]
        }

        if (document.querySelector(`[data-row="${row-1}"][data-column="${column-2}"]`) != null && document.querySelector(`[data-row="${row-1}"][data-column="${column-2}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-1, "column":column-2}]
        }
        if (document.querySelector(`[data-row="${row-2}"][data-column="${column-1}"]`) != null && document.querySelector(`[data-row="${row-2}"][data-column="${column-1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-2, "column":column-1}]
        }

        if (document.querySelector(`[data-row="${row+1}"][data-column="${column-2}"]`) != null && document.querySelector(`[data-row="${row+1}"][data-column="${column-2}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+1, "column":column-2}]
        }
        if (document.querySelector(`[data-row="${row+2}"][data-column="${column-1}"]`) != null && document.querySelector(`[data-row="${row+2}"][data-column="${column-1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+2, "column":column-1}]
        }

        if (document.querySelector(`[data-row="${row-1}"][data-column="${column+2}"]`) != null && document.querySelector(`[data-row="${row-1}"][data-column="${column+2}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-1, "column":column+2}]
        }
        if (document.querySelector(`[data-row="${row-2}"][data-column="${column+1}"]`) != null && document.querySelector(`[data-row="${row-2}"][data-column="${column+1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-2, "column":column+1}]
        }
        
        return allowedMovements
    }

    // ROOK
    if (name === "rook") {
        let allowedMovements = [];
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row+i}"]`) === null || document.querySelector(`[data-row="${row+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row+i, "column":column}]
        }
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-column="${column+i}"]`) === null || document.querySelector(`[data-column="${column+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row, "column":column+i}]
        }
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row-i}"]`) === null || document.querySelector(`[data-row="${row-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row-i, "column":column}]
        }
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-column="${column-i}"]`) === null || document.querySelector(`[data-column="${column-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row, "column":column-i}]
        }
        return allowedMovements
    }

    // BISHOP
    if (name === "bishop") {
        let allowedMovements = [];

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row+i}"][data-column="${column+i}"]`) === null || document.querySelector(`[data-row="${row+i}"][data-column="${column+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row+i, "column":column+i}]
        }

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row-i}"][data-column="${column-i}"]`) === null || document.querySelector(`[data-row="${row-i}"][data-column="${column-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row-i, "column":column-i}]
        }

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row+i}"][data-column="${column-i}"]`) === null || document.querySelector(`[data-row="${row+i}"][data-column="${column-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row+i, "column":column-i}]
        }

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row-i}"][data-column="${column+i}"]`) === null || document.querySelector(`[data-row="${row-i}"][data-column="${column+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row-i, "column":column+i}]
        }
        
        return allowedMovements
    }

    // QUEEN
    if (name === "queen") {
        let allowedMovements = [];

        // ROOK
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row+i}"]`) === null || document.querySelector(`[data-row="${row+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row+i, "column":column}]
        }
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-column="${column+i}"]`) === null || document.querySelector(`[data-column="${column+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row, "column":column+i}]
        }
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row-i}"]`) === null || document.querySelector(`[data-row="${row-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row-i, "column":column}]
        }
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-column="${column-i}"]`) === null || document.querySelector(`[data-column="${column-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row, "column":column-i}]
        }
        
        
        // BISHOP
        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row+i}"][data-column="${column+i}"]`) === null || document.querySelector(`[data-row="${row+i}"][data-column="${column+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row+i, "column":column+i}]
        }

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row-i}"][data-column="${column-i}"]`) === null || document.querySelector(`[data-row="${row-i}"][data-column="${column-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row-i, "column":column-i}]
        }

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row+i}"][data-column="${column-i}"]`) === null || document.querySelector(`[data-row="${row+i}"][data-column="${column-i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row+i, "column":column-i}]
        }

        for (let i = 1; i <= 7; i++) {
            if (document.querySelector(`[data-row="${row-i}"][data-column="${column+i}"]`) === null || document.querySelector(`[data-row="${row-i}"][data-column="${column+i}"]`).innerHTML != "") {
                // Blocking pieces and out of board cells handling
                break
            }
            allowedMovements = [...allowedMovements, {"row":row-i, "column":column+i}]
        }
        
        return allowedMovements
    }

    // KING
    if (name === "king") {
        let allowedMovements = [];

        if (document.querySelector(`[data-row="${row+1}"][data-column="${column}"]`) != null && document.querySelector(`[data-row="${row+1}"][data-column="${column}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+1, "column":column}]
        }
        if (document.querySelector(`[data-row="${row}"][data-column="${column+1}"]`) != null && document.querySelector(`[data-row="${row}"][data-column="${column+1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row, "column":column+1}]
        }
        if (document.querySelector(`[data-row="${row+1}"][data-column="${column+1}"]`) != null && document.querySelector(`[data-row="${row+1}"][data-column="${column+1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+1, "column":column+1}]
        }

        if (document.querySelector(`[data-row="${row-1}"][data-column="${column}"]`) != null && document.querySelector(`[data-row="${row-1}"][data-column="${column}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-1, "column":column}]
        }
        if (document.querySelector(`[data-row="${row}"][data-column="${column-1}"]`) != null && document.querySelector(`[data-row="${row}"][data-column="${column-1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row, "column":column-1}]
        }
        if (document.querySelector(`[data-row="${row-1}"][data-column="${column-1}"]`) != null && document.querySelector(`[data-row="${row-1}"][data-column="${column-1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-1, "column":column-1}]
        }

        if (document.querySelector(`[data-row="${row+1}"][data-column="${column-1}"]`) != null && document.querySelector(`[data-row="${row+1}"][data-column="${column-1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row+1, "column":column-1}]
        }
        if (document.querySelector(`[data-row="${row-1}"][data-column="${column+1}"]`) != null && document.querySelector(`[data-row="${row-1}"][data-column="${column+1}"]`).innerHTML === "") {
            allowedMovements = [...allowedMovements, {"row":row-1, "column":column+1}]
        }

        return allowedMovements
    }
}