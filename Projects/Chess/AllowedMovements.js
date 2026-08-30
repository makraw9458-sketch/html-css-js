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
        // black
        if (team === "black") {
            if (row === 2) {
                // piece is at initial position
                return [
                    {"row":row+1, "column":column},
                    {"row":row+2, "column":column},
                ]
            }else{
                return [
                    {"row":row+1, "column":column},
                ]
            }
        }

        // white
        if (team === "white") {
            if (row === 7) {
                // piece is at initial position
                return [
                    {"row":row-1, "column":column},
                    {"row":row-2, "column":column},
                ]
            }else{
                return [
                    {"row":row-1, "column":column},
                ]
            }
        }
    }

    // KNIGHT
    if (name === "knight") {
        return [
            {"row":row+1, "column":column+2},
            {"row":row+2, "column":column+1},
            {"row":row-1, "column":column-2},
            {"row":row-2, "column":column-1},
            {"row":row+1, "column":column-2},
            {"row":row+2, "column":column-1},
            {"row":row-1, "column":column+2},
            {"row":row-2, "column":column+1},
        ]
    }

    // ROOK
    if (name === "rook") {
        return [
            {"row":row+1, "column":column},
            {"row":row+2, "column":column},
            {"row":row+3, "column":column},
            {"row":row+4, "column":column},
            {"row":row+5, "column":column},
            {"row":row+6, "column":column},
            {"row":row+7, "column":column},

            {"row":row, "column":column+1},
            {"row":row, "column":column+2},
            {"row":row, "column":column+3},
            {"row":row, "column":column+4},
            {"row":row, "column":column+5},
            {"row":row, "column":column+6},
            {"row":row, "column":column+7},


            {"row":row-1, "column":column},
            {"row":row-2, "column":column},
            {"row":row-3, "column":column},
            {"row":row-4, "column":column},
            {"row":row-5, "column":column},
            {"row":row-6, "column":column},
            {"row":row-7, "column":column},

            {"row":row, "column":column-1},
            {"row":row, "column":column-2},
            {"row":row, "column":column-3},
            {"row":row, "column":column-4},
            {"row":row, "column":column-5},
            {"row":row, "column":column-6},
            {"row":row, "column":column-7},

        ]
    }

    // BISHOP
    if (name === "bishop") {
        return [
            {"row":row+1, "column":column+1},
            {"row":row+2, "column":column+2},
            {"row":row+3, "column":column+3},
            {"row":row+4, "column":column+4},
            {"row":row+5, "column":column+5},
            {"row":row+6, "column":column+6},
            {"row":row+7, "column":column+7},

            {"row":row-1, "column":column-1},
            {"row":row-2, "column":column-2},
            {"row":row-3, "column":column-3},
            {"row":row-4, "column":column-4},
            {"row":row-5, "column":column-5},
            {"row":row-6, "column":column-6},
            {"row":row-7, "column":column-7},

            {"row":row+1, "column":column-1},
            {"row":row+2, "column":column-2},
            {"row":row+3, "column":column-3},
            {"row":row+4, "column":column-4},
            {"row":row+5, "column":column-5},
            {"row":row+6, "column":column-6},
            {"row":row+7, "column":column-7},

            {"row":row-1, "column":column+1},
            {"row":row-2, "column":column+2},
            {"row":row-3, "column":column+3},
            {"row":row-4, "column":column+4},
            {"row":row-5, "column":column+5},
            {"row":row-6, "column":column+6},
            {"row":row-7, "column":column+7},
        ]
    }

    // QUEEN
    if (name === "queen") {
        return [
            // ROOK
            {"row":row+1, "column":column},
            {"row":row+2, "column":column},
            {"row":row+3, "column":column},
            {"row":row+4, "column":column},
            {"row":row+5, "column":column},
            {"row":row+6, "column":column},
            {"row":row+7, "column":column},

            {"row":row, "column":column+1},
            {"row":row, "column":column+2},
            {"row":row, "column":column+3},
            {"row":row, "column":column+4},
            {"row":row, "column":column+5},
            {"row":row, "column":column+6},
            {"row":row, "column":column+7},


            {"row":row-1, "column":column},
            {"row":row-2, "column":column},
            {"row":row-3, "column":column},
            {"row":row-4, "column":column},
            {"row":row-5, "column":column},
            {"row":row-6, "column":column},
            {"row":row-7, "column":column},

            {"row":row, "column":column-1},
            {"row":row, "column":column-2},
            {"row":row, "column":column-3},
            {"row":row, "column":column-4},
            {"row":row, "column":column-5},
            {"row":row, "column":column-6},
            {"row":row, "column":column-7},

            // BISHOP
            {"row":row+1, "column":column+1},
            {"row":row+2, "column":column+2},
            {"row":row+3, "column":column+3},
            {"row":row+4, "column":column+4},
            {"row":row+5, "column":column+5},
            {"row":row+6, "column":column+6},
            {"row":row+7, "column":column+7},

            {"row":row-1, "column":column-1},
            {"row":row-2, "column":column-2},
            {"row":row-3, "column":column-3},
            {"row":row-4, "column":column-4},
            {"row":row-5, "column":column-5},
            {"row":row-6, "column":column-6},
            {"row":row-7, "column":column-7},

            {"row":row+1, "column":column-1},
            {"row":row+2, "column":column-2},
            {"row":row+3, "column":column-3},
            {"row":row+4, "column":column-4},
            {"row":row+5, "column":column-5},
            {"row":row+6, "column":column-6},
            {"row":row+7, "column":column-7},

            {"row":row-1, "column":column+1},
            {"row":row-2, "column":column+2},
            {"row":row-3, "column":column+3},
            {"row":row-4, "column":column+4},
            {"row":row-5, "column":column+5},
            {"row":row-6, "column":column+6},
            {"row":row-7, "column":column+7},
        ]
    }

    // KING
    if (name === "king") {
        return [
            {"row":row+1, "column":column},
            {"row":row, "column":column+1},
            {"row":row+1, "column":column+1},

            {"row":row-1, "column":column},
            {"row":row, "column":column-1},
            {"row":row-1, "column":column-1},

            {"row":row+1, "column":column-1},
            {"row":row-1, "column":column+1},
        ]
    }

    // TO-DOs
    // remove the blocked movements - find positions programmatically
}