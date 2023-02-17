import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import styles from "./Item.module.css";

export default function Item({ item, deleteById, editById }) {
    return (
        <div className={styles.itemContainer}>
            <ul className={styles.list}>
                <li className={styles.elementsList}>
                    <div className={styles.CheckItem}>
                        <input className={styles.checkbox} type="checkbox" />
                        <p
                            className={
                                item.isDone ? styles.isDone : styles.noDone
                            }
                        >
                            {item.title}
                        </p>
                    </div>
                    <div className={styles.iconsContainer}>
                        <RiEdit2Line onClick={() => editById(item.id)} />

                        <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
                    </div>
                </li>
            </ul>
        </div>
    );
}
