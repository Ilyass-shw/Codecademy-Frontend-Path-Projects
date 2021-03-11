import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import "./PostsList.css";
import {  fetchPosts, selectAllPosts } from "./postsSlice";

const PostsList = () => {
	const postStatus = useSelector((state) =>state.posts.status);

	const dispatch = useDispatch();
	useEffect(() => {
		if (postStatus === "idle") {
			dispatch(fetchPosts());
		}
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
