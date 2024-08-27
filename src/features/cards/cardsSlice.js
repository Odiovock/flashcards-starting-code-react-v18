import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const {id, front, back} = action.payload;
            state.cards[id] = {
                id,
                front,
                back
            };
            console.log('Card added:', state.cards[id]);
        }
    }
});

export const selectCardById = (state, cardId) => state.cards.cards[cardId];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;