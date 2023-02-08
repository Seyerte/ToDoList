import React from "react";
import styles from "./ItemForm.module.css";

export const ItemForm = () => {
    return (
        <div className={styles.inputContainer}>
            <div>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.buttonAdd}>Add</button>
                <button className={styles.buttonUpdate}>Update</button>
            </div>
            <div className={styles.filterItems}>
                <button className={styles.buttonAll}>All</button>
                <button className={styles.buttonPending}>Pending</button>
                <button className={styles.buttonDone}>Done</button>
            </div>
        </div>
    );
};
