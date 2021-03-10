import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/api";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNow } from "date-fns";
import { useDispatch } from "react-redux";
import millify from "millify";

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
	reducers: {
		postAdded(state, action) {
			state.posts.push(action.payload)
		  },
	},
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await client.get(
		"https://www.reddit.com/search.json?q=puppies&include_facets=true&limit=2&restrict_sr=true&sort=relevance&t=all"
	);
	console.log(response);

	const fetchedPosts = response.data.children.map((post) => {
		let postDate = fromUnixTime(post.data.created_utc);
		postDate = formatDistanceToNow(postDate, { addSuffix: true, includeSeconds: true });
		const upvotes = millify(post.data.ups);
		
		return {
			title: post.data.title,
			img: post.data.rpan_video.hls_url,
			upvotes,
			date: postDate,
			author: post.data.author,
			subreddit: post.data.subreddit_name_prefixed,
			subredditIcon: post.data.rpan_video.scrubber_media_url,
			content: "text1",
			id: post.data.id,
		};
	});

	console.log(fetchedPosts);
	return fetchedPosts;
});

export const selectAllPosts = (state) => state.posts.posts;
