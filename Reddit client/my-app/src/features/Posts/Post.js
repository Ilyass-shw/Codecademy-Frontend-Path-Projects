import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Post.css";
import { Icon } from "@iconify/react";
import bxlReddit from "@iconify/icons-bx/bxl-reddit";
import { handleThumbnail } from "../../api/api";

const Post = ({ post }) => {
	const [isHoverOverSubreddit, setIsHoverOverSubreddit] = useState(false);
	let style;
	let stylee = {
		padding: ".4rem",
		color: "#ffffff",
		backgroundColor: "#5a5a5ac9",
		borderRadius: 2,
		position: "relative",
		right: 107,
		bottom: 30,
		visibility: "hidden",
	};
	if (isHoverOverSubreddit) {
		style = {
			color: "white",
		};
		stylee.visibility = "visible";
	}

	return (
		<div className="post-block">
			<a alt={post.title} href={"https://www.reddit.com" + post.url} target="_blank" rel="noopener noreferrer">
				{handleThumbnail(post.img)}
			</a>
			<div className="post-data">
				<a alt={post.title} href={"https://www.reddit.com" + post.url} target="_blank" rel="noopener noreferrer">
					<div className="post-data-container">
						<h4 className="title">{post.title}</h4>
						<div className="upvotes-date-data">
							<p>
								{post.upvotes} upvotes<span className="dot">•</span>
							</p>
							<p>{post.date}</p>
						</div>
						<div className="subreddit">
							<Icon icon={bxlReddit} width="1.5rem" height="1.5rem" />
							<p
								style={style}
								onMouseEnter={() => {
									setIsHoverOverSubreddit(true);
								}}
								onMouseLeave={() => {
									setIsHoverOverSubreddit(false);
								}}
							>
								{post.subreddit}
							</p>
							<p style={stylee}>{post.subreddit}</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Post;
