import axios from 'axios';
const CARD_API_BASE_URL = 'http://localhost:8080/api/v1/cards';


class CardService {
    saveCard(card) {
        return axios.post(CARD_API_BASE_URL, card);
    };
    getCards() {
        return axios.get(CARD_API_BASE_URL);
    };
}

export default new CardService();