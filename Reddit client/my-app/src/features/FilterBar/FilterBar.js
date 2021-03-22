import React, { useState } from "react";
// npm install --save-dev @iconify/react @iconify-icons/bx
import { InlineIcon } from "@iconify/react";
import bxsRocket from "@iconify-icons/bx/bxs-rocket";
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import fireFilled from "@iconify-icons/ant-design/fire-filled";
// npm install --save-dev @iconify/react @iconify-icons/ic
import sharpNewReleases from "@iconify-icons/ic/sharp-new-releases";
// npm install --save-dev @iconify/react @iconify-icons/bx
// import bxsCommentDetail from "@iconify-icons/bx/bxs-comment-detail";
import "./FilterBar.css";
// npm install --save-dev @iconify/react @iconify/icons-oi
import verticalAlignTop from "@iconify/icons-oi/vertical-align-top";
// npm install --save-dev @iconify/react @iconify/icons-icons8
import commentsIcon from "@iconify/icons-icons8/comments";
// npm install --save-dev @iconify/react @iconify-icons/eva
import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
// npm install --save-dev @iconify/react @iconify-icons/eva
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

import { useDispatch } from "react-redux";
import { filterUpdated, fetchPosts } from "../posts/postsSlice";

export const FilterBar = () => {
	const [filterBy, setFilterBy] = useState("relevance");

	const dispatch = useDispatch();

	const handleOnClick = ({ target }) => {
		setFilterBy(target.value);
		dispatch(filterUpdated(filterBy));
		dispatch(fetchPosts());
	};
	const scrollLeft = () => (document.getElementById("filter-bar").scrollLeft -= 100);
	const scrollRight = () => (document.getElementById("filter-bar").scrollLeft += 100);

	return (
		<div className="filter-bar-container">
			<div className="filter-bar" id="filter-bar">
				<div className="arrow left">
					<div className="arrow-button" onClick={scrollLeft}>
						<InlineIcon icon={arrowIosBackOutline} />
					</div>
				</div>

				<button
					className={`filter-button ${"relevance" === filterBy && "selected"}`}
					id="relevance"
					value="relevance"
					onClick={handleOnClick}
				>
					<InlineIcon icon={bxsRocket} /> Relevance
				</button>
				<button
					className={`filter-button ${"hot" === filterBy && "selected"}`}
					id="hot"
					value="hot"
					onClick={handleOnClick}
				>
					<InlineIcon icon={fireFilled} /> Hot
				</button>
				<button
					className={`filter-button ${"new" === filterBy && "selected"}`}
					id="new"
					value="new"
					onClick={handleOnClick}
				>
					<InlineIcon icon={sharpNewReleases} /> New
				</button>
				<button
					className={`filter-button ${"top" === filterBy && "selected"}`}
					id="top"
					value="top"
					onClick={handleOnClick}
				>
					<InlineIcon icon={verticalAlignTop} width=".6rem" height=".6rem" /> Top
				</button>
				<button
					className={`filter-button ${"comments" === filterBy && "selected"}`}
					id="comments"
					value="comments"
					onClick={handleOnClick}
				>
					<InlineIcon icon={commentsIcon} /> Comments
				</button>

				<div className="arrow right">
					<div className="arrow-button" onClick={scrollRight}>
						<InlineIcon icon={arrowIosForwardOutline} />
					</div>
				</div>
			</div>
		</div>
	);
};
