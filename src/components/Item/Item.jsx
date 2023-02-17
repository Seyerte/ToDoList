import React, { useState, useEffect } from "react";
import { RiEdit2Line, RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styles from "./Item.module.css";

export default function Item({ item, deleteById, editById }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [input, setInput] = useState(item.title);

    useEffect(() => {
        setInput(item.title);
    }, [item]);

    function handleChange(e) {
        setInput(e.target.value);
        console.log(input);
    }

    const handleEditConfirm = () => {
        const itemToUpdate = {
            id: item.id,
            title: input,
            isDone: item.isDone,
        };
        editById(itemToUpdate);
        setInput(item.title);
        setIsEditMode(false);
    };

    return (
        <div className={styles.itemContainer}>
            <ul className={styles.list}>
                <li className={styles.elementsList}>
                    <div className={styles.CheckItem}>
                        <input className={styles.checkbox} type="checkbox" />
                        <article
                            className={
                                item.isDone ? styles.isDone : styles.noDone
                            }
                        >
                            {!isEditMode ? (
                                <div>{item.title}</div>
                            ) : (
                                <div className={styles.inputEdit}>
                                    <input
                                        className={styles.inputEditMode}
                                        type="text"
                                        value={input}
                                        onChange={handleChange}
                                    />
                                    <AiOutlineCheck
                                        className={styles.AiOutlineCheck}
                                        onClick={handleEditConfirm}
                                    />
                                    <AiOutlineClose
                                        className={styles.AiOutlineClose}
                                        onClick={() => {
                                            setInput(item.title);
                                            setIsEditMode(false);
                                        }}
                                    />
                                </div>
                            )}
                        </article>
                    </div>
                    <div className={styles.iconsContainer}>
                        <RiEdit2Line onClick={() => setIsEditMode(true)}>
                            {item.title}
                        </RiEdit2Line>
                        <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
                    </div>
                </li>
            </ul>
        </div>
    );
}
