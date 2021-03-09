import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/api";

const initialState = {
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
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
	const response = await client.get('https://www.reddit.com/memes.json');
	// await fetch('https://www.reddit.com/memes.json').then(response=> {
	// 	if(response.ok){
	// 		console.log('oui')
	// 		return response.json()
	// 	}
	// 	console.log('la')
	// }).then(jsonresponse=>{
	// 	console.log(jsonresponse)
	// })
	console.log(response);
})

export const selectAllPosts = (state) => state.posts.posts;