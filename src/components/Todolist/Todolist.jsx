import React, { useState } from "react";
import Item from "../Item/Item";
import Navbar from "../Navbar/Navbar";
import styles from "./Todolist.module.css";
import ItemForm from "../ItemForm/ItemForm";
import { v4 as uuid } from "uuid";

const itemsList = [
    {
        id: "1",
        title: "Study programming",
        isDone: false,
    },
    {
        id: "2",
        title: "Call my friend",
        isDone: false,
    },
    {
        id: "3",
        title: "Go shopping",
        isDone: false,
    },
    {
        id: "4",
        title: "Water plants",
        isDone: false,
    },
];

export default function Todolist() {
    const [data, setData] = useState(itemsList);

    const deleteById = (idToDelete) => {
        console.log(idToDelete);
        const newData = data.filter((item) => item.id !== idToDelete);
        setData(newData);
    };

    const addItem = (value) => {
        const newItem = {
            id: uuid(),
            title: value,
            isDone: false,
        };
        setData([...data, newItem]);
    };

    const editById = (itemToUpdate) => {
        const newData = data.map((item) =>
            item.id === itemToUpdate.id ? itemToUpdate : item
        );
        setData(newData);
        console.log(itemToUpdate);
    };

    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <ItemForm addItem={addItem} />
            <ul>
                {data.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        deleteById={deleteById}
                        editById={editById}
                    />
                ))}
            </ul>
        </div>
    );
}
