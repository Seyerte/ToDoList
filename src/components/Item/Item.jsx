import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import styles from "./Item.module.css";

export default function Item({ item, deleteById }) {
    return (
        <div className={styles.itemContainer}>
            <ul className={styles.list}>
                <li className={styles.elementsList}>
                    <div>
                        <input className={styles.checkbox} type="checkbox" />
                        {item.title}
                    </div>
                    <div className={styles.iconsContainer}>
                        <RiEdit2Line />
                        <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
                    </div>
                </li>
            </ul>
        </div>
    );
}
