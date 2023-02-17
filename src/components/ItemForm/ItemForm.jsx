import React, { useState } from "react";
import styles from "./ItemForm.module.css";

export default function ItemForm({ addItem }) {
    const [input, setInput] = useState("");

    function handlerChange(value) {
        setInput(value);
    }

    function handlerAdd() {
        addItem(input);
        setInput("");
    }

    return (
        <div className={styles.inputContainer}>
            <div>
                <input
                    className={styles.input}
                    placeholder="Add task"
                    onChange={(e) => handlerChange(e.target.value)}
                    value={input}
                    type="text"
                ></input>
            </div>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.buttonAdd}
                    onClick={() => handlerAdd()}
                >
                    Add
                </button>
                {/* <button className={styles.buttonUpdate}>Update</button> */}
            </div>
            {/* <div className={styles.filterItems}>
                <button className={styles.buttonAll}>All</button>
                <button className={styles.buttonPending}>Pending</button>
                <button className={styles.buttonDone}>Done</button>
            </div> */}
        </div>
    );
}
