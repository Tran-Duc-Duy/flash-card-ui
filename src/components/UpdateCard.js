import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CardService from '../services/CardService';

const UpdateCard = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [card, setCard] = React.useState({
        id: id,
        front: "",
        back: "",
    });
    const updateCard = (e) => {
        e.preventDefault();
        CardService.updateCard(card,id)
        .then((response) => {
            navigate('/card-list');
        }).catch((error) => {
            console.error(error);
        });
    };
    const handleChange = (e) => {//handling the input change
        const value = e.target.value; //get the value of the input 
        setCard({ ...card, [e.target.name]: value }); //this is the same as card.front = value;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CardService.getCardById(id);
                setCard(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Update flash-card</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Front-card</label>
                    <input
                        type="text"
                        name="front"
                        value={card.front}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter the front-card" //placeholder for the input
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Back-card</label>
                    <input
                        type="text"
                        name="back"
                        value={card.back}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter the back-card"
                        className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={updateCard}
                        className=" rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-5">Update</button>

                    <button
                        onClick={() => navigate('/card-list')}
                        className=" rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-5">Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateCard;