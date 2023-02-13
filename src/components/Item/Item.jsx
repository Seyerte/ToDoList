import React from "react";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Item({ item, deleteById }) {
    return (
        <div>
            <li>
                <div>
                    <input type="checkbox" />
                    {Item.name}
                </div>
                <div>
                    <RiEdit2Line />
                    <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
                </div>
            </li>
        </div>
    );
}
