import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import { Icon, InlineIcon } from "@iconify/react";
import bxlReddit from "@iconify/icons-bx/bxl-reddit";

const Post = ({ post }) => {
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
						<Icon icon={bxlReddit} width='1.5rem' height='1.5rem'/> <p>{post.subreddit}</p>
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
