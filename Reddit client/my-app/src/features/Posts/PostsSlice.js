import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: [
		{
			title: "title1",
			img: "src1",
			upvotes: 10,
			date: "1 min ago 1",
			author: "arthur1",
			subreddit: "r/German1",
			subredditIcon: "src1",
			content: "text1",
		},
		{
			title: "title2",
			img: "src2",
			upvotes: 10,
			date: "1 min ago 2",
			author: "arthur 2",
			subreddit: "r/German 2",
			subredditIcon: "src 2",
			content: "text 2",
		},
		{
			title: "title3",
			img: "src3",
			upvotes: 10,
			date: "1 min ago 3",
			author: "arthur 3",
			subreddit: "r/German 3",
			subredditIcon: "src 3",
			content: "text 3",
		},
	],
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;


