import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, getEndPoint, handlefetchedPosts } from "../../api/api";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNow } from "date-fns";
import millify from "millify";

const initialState = {
	searchTerm: "hoho",
	posts: [
		{
			title: "mot dial dehk hhh",
			img: "./imgs/animation hotel.png",
			upvotes: 100,
			date: "1 min ago 1",
			author: "arthur1",
			subreddit: "r/German1",
			subredditIcon: "./imgs/icons/background_photo_desktop.webp",
			content: "text1",
			id: 1,
		},
		{
			title: "title2",
			img: "./imgs/Untitled.png",
			upvotes: 100,
			date: "1 min ago 2",
			author: "arthur 2",
			subreddit: "r/German 2",
			subredditIcon: "./imgs/icons/favicon.ico",
			content: "text 2",
			id: 2,
		},
		{
			title: "title3",
			img: "./imgs/Untitledff.png",
			upvotes: 100,
			date: "1 min ago 3",
			author: "arthur 3",
			subreddit: "r/German 3",
			subredditIcon: "./imgs/icons/fff.png",
			content: "text 3",
			id: 3,
		},
	],
	status: "idle",
	error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, { getState }) => {
	const response = await client.get(getEndPoint(getState().posts));

	console.log(response);

	const fetchedPosts = response.data.children.map((post) => {
		let postDate = fromUnixTime(post.data.created_utc);
		postDate = formatDistanceToNow(postDate, { addSuffix: true, includeSeconds: true });
		const upvotes = millify(post.data.ups);

		return {
			title: post.data.title,
			img: post.data.rpan_video ? post.data.rpan_video.scrubber_media_url : "",
			upvotes,
			date: postDate,
			author: post.data.author,
			subreddit: post.data.subreddit_name_prefixed,
			subredditIcon: "",
			content: "text1",
			id: post.data.id,
		};
	});

	console.log(fetchedPosts);
	console.log(handlefetchedPosts(response));
	return fetchedPosts;
});

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		searchTermSet(state, action) {
			state.searchTerm = action.payload;
		},
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

export const { searchTermSet } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
