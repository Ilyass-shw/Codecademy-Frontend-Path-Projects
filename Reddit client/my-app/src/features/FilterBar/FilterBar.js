import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { InlineIcon } from "@iconify/react";
import bxsRocket from "@iconify-icons/bx/bxs-rocket";
import fireFilled from "@iconify-icons/ant-design/fire-filled";
import sharpNewReleases from "@iconify-icons/ic/sharp-new-releases";
import "./FilterBar.css";
import verticalAlignTop from "@iconify/icons-oi/vertical-align-top";
import commentsIcon from "@iconify/icons-icons8/comments";
import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

import { filterUpdated, fetchPosts } from "../posts/postsSlice";
import { styleArrowsToDisplayNone, updateArrowStyle } from "./FilterBarUtils";

export const FilterBar = () => {
	const [filterBy, setFilterBy] = useState("relevance");

	const [styleRightArrow, setStyleRightArrow] = useState({});
	const [styleLeftArrow, setStyleLeftArrow] = useState({});

	const [pixelsScrolledLeft, setPixelsScrolledLeft] = useState(0);

	const dispatch = useDispatch();

	const handleOnClick = ({ target }) => {
		setFilterBy(target.value);
	};

	const handleScrollLeft = () => {
		document.getElementById("filter-bar").scrollLeft -= 100;

		setPixelsScrolledLeft(pixelsScrolledLeft + 1);

		styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);
	};

	const handleScrollRight = () => {
		document.getElementById("filter-bar").scrollLeft += 100;

		styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);

		setPixelsScrolledLeft(pixelsScrolledLeft + 1);
	};
	useEffect(() => {
		dispatch(filterUpdated(filterBy));
		dispatch(fetchPosts());
	}, [filterBy, dispatch]);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
		}, 100);

		return () => {
			clearTimeout(timeOut);
		};
	}, [setStyleLeftArrow, pixelsScrolledLeft, setStyleRightArrow]);

	return (
		<div className="filter-bar-container">
			<div className="filter-bar" id="filter-bar">
				<div className="arrow left" style={styleLeftArrow}>
					<div className="arrow-button" onClick={handleScrollLeft}>
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

				<div className="arrow right" style={styleRightArrow}>
					<div className="arrow-button" onClick={handleScrollRight}>
						<InlineIcon icon={arrowIosForwardOutline} />
					</div>
				</div>
			</div>
		</div>
	);
};
