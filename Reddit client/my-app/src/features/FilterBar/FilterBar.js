import React, { useEffect, useState } from "react";
import { InlineIcon } from "@iconify/react";
import bxsRocket from "@iconify-icons/bx/bxs-rocket";
import fireFilled from "@iconify-icons/ant-design/fire-filled";
import sharpNewReleases from "@iconify-icons/ic/sharp-new-releases";
import "./FilterBar.css";
import verticalAlignTop from "@iconify/icons-oi/vertical-align-top";
import commentsIcon from "@iconify/icons-icons8/comments";
import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

import { useDispatch } from "react-redux";
import { filterUpdated, fetchPosts } from "../posts/postsSlice";
import useWindowDimensions from "../Helper/UseWindowDimensions";

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

export const FilterBar = () => {
	const [filterBy, setFilterBy] = useState("relevance");

	const [styleRightArrow, setStyleRightArrow] = useState({});
	const [styleLeftArrow, setStyleLeftArrow] = useState({});

	const [isLastFilterVisible, setIsLastFilterVisible] = useState();
	const [isFirstFilterVisible, setIsFirstFilterVisible] = useState();

	const [pixelsScrolledLeft, setPixelsScrolledLeft] = useState(0);

	const dispatch = useDispatch();

	const handleOnClick = ({ target }) => {
		setFilterBy(target.value);
	};

	const { width } = useWindowDimensions();
	const barWidth = width - 8; // 8px is the width of the scrolling bar
	const handleScrollLeft = () => {
		document.getElementById("filter-bar").scrollLeft -= 100;

		setPixelsScrolledLeft(Math.max(pixelsScrolledLeft - (100 + 8), 0));
	};

	const handleScrollRight = () => {
		document.getElementById("filter-bar").scrollLeft += 100;

		setPixelsScrolledLeft(Math.min(pixelsScrolledLeft + (100 + 8), barWidth - 100));
	};
	useEffect(() => {
		dispatch(filterUpdated(filterBy));
		dispatch(fetchPosts());
	}, [filterBy, dispatch]);

	useEffect(() => {
		setIsLastFilterVisible(isInViewport(document.getElementById("comments")));
		setIsFirstFilterVisible(isInViewport(document.getElementById("relevance")));
		console.log("relevance : " + isFirstFilterVisible);
		console.log("comments : " + isLastFilterVisible);
		console.log(pixelsScrolledLeft);

		if (isFirstFilterVisible) {
			setStyleLeftArrow({ display: "none" });
		} else if (isLastFilterVisible) {
			setStyleRightArrow({ display: "none" });
		} else {
			setStyleLeftArrow({ display: "flex" });

			setStyleRightArrow({ display: "flex" });
		}
	}, [
		setStyleLeftArrow,
		pixelsScrolledLeft,
		setStyleRightArrow,
		isLastFilterVisible,
		setIsLastFilterVisible,
		setIsFirstFilterVisible,
		isFirstFilterVisible,
	]);

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
