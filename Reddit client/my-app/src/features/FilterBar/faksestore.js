import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const fakeSlice = createSlice({
	name: "fakeSlice",
	initialState,
	reducers: {},
});

export default configureStore({
	reducer: {
		posts: fakeSlice.reducer,
	},
});
