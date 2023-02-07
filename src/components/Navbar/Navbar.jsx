import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.divTitle}>
                <h1 className={styles.titleTo}>To</h1>
                <h1 className={styles.titleDo}>Do</h1>
                <h1 className={styles.titleList}>List</h1>
            </div>
            <img
                className={styles.navImg}
                src={require("./img/Checklist.gif")}
                alt="gifList"
            />
        </div>
    );
};
