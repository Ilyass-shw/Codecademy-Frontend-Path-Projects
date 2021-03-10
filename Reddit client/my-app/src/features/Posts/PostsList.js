import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import "./PostsList.css";
import { postAdded, fetchPosts, selectAllPosts } from "./postsSlice";

const PostsList = () => {
	const postStatus = useSelector((state) => state.posts.status);

	const dispatch = useDispatch();
	useEffect(() => {
		if (postStatus === "idle") {
			dispatch(fetchPosts());
		}

		dispatch(
			postAdded([
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
			])
		);
	}, [postStatus, dispatch]);

	const posts = useSelector(selectAllPosts);
	const content = posts.map((post) => {
		return <Post key={post.id} post={post} />;
	});
	return (
		<div className="posts-container">
			<div className="posts-list">{content}</div>
		</div>
	);
};

export default PostsList;
