import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardService from '../services/CardService';
import Card from './Card';

const CardList = () => {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);//set loading to true
  const [cards, setCards] = useState(null);//set card to null


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CardService.getCards();
        setCards(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  
  const deleteCard = (e, id)=>{
    e.preventDefault();
    CardService.deleteCard(id)
    .then((response) => {
      if(cards){
        setCards((prevElement)=>{
          return prevElement.filter(card => card.id !== id);
        });
      };
    }).catch(err => {
      console.log(err);
    });
  };


  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button 
        onClick={()=>navigate('/add-card')}
        className="rounded text-white bg-slate-500 py-2 px-6"> Add Flash Card</button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Front</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Back</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
            </tr>
          </thead>

          { ! loading && (
            <tbody className="bg-white">
                {cards.map((card) => (
                  <Card 
                  card={card} 
                  deleteCard={deleteCard} 
                  key={card.id}></Card>
                ))};
              </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CardList;