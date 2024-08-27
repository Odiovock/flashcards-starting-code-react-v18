import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;

            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }
        },
        addQuizIdToTopic: (state, action) => {
            const {id, topicId} = action.payload;
            state.topicId[topicId].quizIds.push(id);
        }
    }
});

export const selectQuizzes = (state) => quizzesSlice.quizzes.quizzes;
export const {addQuiz, addQuizIdToTopic} = quizzesSlice.actions;
export default quizzesSlice.reducer;