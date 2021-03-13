import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import "./PostsList.css";
import { fetchPosts, selectAllPosts } from "./postsSlice";
import PostsSkeleton from "../PostsSkeleton/PostsSkeleton";

const PostsList = () => {
	const postsStatus = useSelector((state) => state.posts.status);
	const postError = useSelector((state) => state.posts.error);
	const posts = useSelector(selectAllPosts);

	const dispatch = useDispatch();

	useEffect(() => {
		// const timeOut = setTimeout(() => {
			if (postsStatus === "idle") {
				dispatch(fetchPosts());
			}
		// }, 100);
		// clearTimeout(timeOut)
		
	}, [postsStatus, dispatch]);

	let content;

	if(postsStatus === "idle" || postsStatus === "Loading"){
		content = Array(3).fill().map(item=>{
			return <PostsSkeleton/>
		})
	}else if(postsStatus === "failed"){
		content = postError
	}

	 content = posts.map((post) => {
		return <Post key={post.id} post={post} />;
	});

	return (
		<div className="posts-container">
			<div className="posts-list">
				{
					 

					content
				}
			</div>
		</div>
	);
};

export default PostsList;
