import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import "./PostsList.css";

const PostsList = () => {
	const posts = useSelector((state) => state.posts.posts);
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
