// components/Board.tsx

import React from "react";
import Cell from "./Cell";
import Pawn from "./pieces/Pawn";
import styles from "@/styles/Home.module.css";

const renderPawn = (rowIndex: any) => {
    if (rowIndex === 1) {
        return <Pawn color="white" />;
    } else if (rowIndex === 6) {
        return <Pawn color="black" />;
    }
    return null;
};

const Board = () => {
    return (
        <div className={styles.board}>
            {[...Array(8)].map((_, rowIndex) => (
                <div key={rowIndex} className="row">
                    {[...Array(8)].map((_, colIndex) => (
                        <Cell key={colIndex} isBlack={(rowIndex + colIndex) % 2 === 0}>
                            {renderPawn(rowIndex)}
                        </Cell>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
