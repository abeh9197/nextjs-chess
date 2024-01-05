// components/Cell.tsx
import React from "react";
import styles from "@/styles/Home.module.css";

interface CellProps {
    isBlack: boolean;
    children?: React.ReactNode;
}

const Cell: React.FC<CellProps> = ({ isBlack, children }) => {
    return (
        <div className={`${styles.cell} ${isBlack ? styles.black : styles.white}`}>
            {children}
        </div>
    );
};

export default Cell;
