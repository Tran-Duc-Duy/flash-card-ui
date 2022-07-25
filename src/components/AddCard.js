import React,{useState} from 'react'
import CardService from '../services/CardService';

const AddCard = () => {

    //ussing stage snippets to save the input values
    const [card, setCard] = useState({
        id:"",
        front:"",
        back:"",
    }); 

    const handleChange = (e) => {
        const value = e.target.value; //get the value of the input 
        setCard({...card,[e.target.name]:value}); //this is the same as card.front = value;
    }; 
    const saveCard = (e) => {
        e.preventDefault(); //prevent the page from refreshing
        CardService.saveCard(card)
        .then((response) => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add new flash-card</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Front-card</label>
                <input 
                type="text" 
                name="front" 
                value={card.front} 
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Back-card</label>
                <input 
                type="text" 
                name ="back" 
                value ={card.back} 
                onChange={(e) => handleChange(e)}
                className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button onClick={saveCard} className=" rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-5">
                    Save
                </button>
                <button className=" rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-5">Clear</button>
            </div>
            
        </div>
    </div>
  );
}

export default AddCard