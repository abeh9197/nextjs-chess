// pages/index.tsx
import React from "react";
import Board from "@/components/Board";
import styles from "@/styles/Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Chess Game
                </h1>

                <Board />
            </main>
        </div>
    );
};

export default Home;
