import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topicSlice',
    initialState: {
        topics: {}
    }
});