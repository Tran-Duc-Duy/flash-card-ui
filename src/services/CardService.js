import axios from 'axios';
const CARD_API_BASE_URL = 'http://localhost:8080/api/v1/cards';


class CardService {
    saveCard(card) {
        return axios.post(CARD_API_BASE_URL, card);
    };
    getCards() {
        return axios.get(CARD_API_BASE_URL);
    };
    deleteCard(id) {
        return axios.delete(CARD_API_BASE_URL + '/' + id);
    };
    getCardById(id) {
        return axios.get(CARD_API_BASE_URL + '/' + id);
    }
    updateCard(card, id) {
        return axios.put(CARD_API_BASE_URL + '/' + id, card);
    }
}

export default new CardService();