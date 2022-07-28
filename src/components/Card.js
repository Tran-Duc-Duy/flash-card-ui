import React from 'react'

const Card = ({ card, deleteCard }) => {
    return (
        <tr key={card.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500"> {card.front}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500"> {card.back}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a href="" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                <a
                    onClick={(e, id) => deleteCard(e, card.id)}
                    href="" className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Delete</a>
            </td>
        </tr >
    )
}

export default Card