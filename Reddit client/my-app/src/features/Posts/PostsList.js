import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostsList = () => {
	const posts = useSelector((state) => state.posts.posts);
	const content = posts.map((post) => {
		return <Post key={Post.id} post={post} />;
	});
	return <div className="posts-list">{content}</div>;
};

export default PostsList;
