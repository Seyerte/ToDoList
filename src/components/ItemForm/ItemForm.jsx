import React from "react";
import styles from "./ItemForm.module.css";

export const ItemForm = () => {
    return (
        <div className={styles.inputContainer}>
            <div>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button1}>Add</button>
                <button className={styles.button2}>Update</button>
            </div>
        </div>
    );
};
