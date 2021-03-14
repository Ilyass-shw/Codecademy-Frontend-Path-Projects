import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, getEndPoint, handlefetchedPosts } from "../../api/api";


const initialState = {
	searchTerm: "lol",
	posts: [],
	filter : 'relevance',
	status: "idle",
	error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { getState }) => {
	const endPoint = getEndPoint(getState().posts);
	const response = await client.get(endPoint);

	console.log(response);
	const fetchedPosts = handlefetchedPosts(response);
	console.log(fetchedPosts);
	return fetchedPosts;
});

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		searchTermSet(state, action) {
			state.searchTerm = action.payload;
		},
		filterUpdated(state, action){
			state.filter = action.payload
		}
	},
	extraReducers: {
		[fetchPosts.pending]: (state, action) => {
			state.status = "Loading";
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.posts = action.payload;
		},
		[fetchPosts.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		},
	},
});

export const { searchTermSet, filterUpdated } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
