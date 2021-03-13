import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Post.css";
import logo from "./imgs/icons/favicon.ico";
import { useSelector } from "react-redux";


const Post = ({ post }) => {

	// const [loading, setLoading] = useState(false)

	const loading = useSelector(state => state.posts.status)
	return (
		<div className="post-block">
			<img src={post.img} alt="post" className="content-image" />
			<div className="post-data">
				<div className="post-data-container">
					<h4 className="title">{post.title}</h4>
					<div className="upvotes-date-data">
						<p>
							{post.upvotes} upvotes<span className="dot">•</span>
						</p>
						<p>{post.date}</p>
					</div>
					<div className="subreddit">
						<img src={logo} alt="subreddit's icon" className="subreddit-icon" />
						<p>{post.subreddit}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Post;
