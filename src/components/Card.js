import React from 'react'
import { useNavigate } from "react-router-dom";

const Card = ({ card, deleteCard }) => {
    const navigate = useNavigate();
    const editCard = (e, id) => {
        e.preventDefault();
        navigate(`/edit-card/${id}`);
    };
    return (
        <tr key={card.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500"> {card.front}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500"> {card.back}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    onClick={(e, id) => editCard(e, card.id)}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
                <a
                    onClick={(e, id) => deleteCard(e, card.id)}
                    className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Delete</a>
            </td>
        </tr >
    )
}

export default Card