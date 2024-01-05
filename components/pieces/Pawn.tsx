// components/pieces/Pawn.tsx
import React from 'react';
import styles from "@/styles/Home.module.css"

interface PawnProps {
    color: 'white' | 'black';
}

const Pawn: React.FC<PawnProps> = ({ color }) => {
    const imageUrl = color === 'white'
    ? 'images/pieces/pawn_white.png'
    : 'images/pieces/pawn_black.png';

    return (
        <img src={imageUrl} alt={`${color} pawn`} style={{ width: '50%', height: '100%' }}/>
    );
};

export default Pawn;