import React, { useEffect, useState, useRef } from "react";

import "./FilterBar.css";
import { updateArrowClass, handleEvent } from "./FilterBarUtils";
import FilterButtons from "../FilterButtons/FilterButtons";

import { InlineIcon } from "@iconify/react";

import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

export const FilterBar = () => {
	const [showLeft, setShowLeft] = useState();
	const [showRight, setShowRight] = useState();

	const filterBar = useRef();

	const handleScrollLeft = () => {
		filterBar.current.scrollLeft -= 100;
	};

	const handleScrollRight = () => {
		filterBar.current.scrollLeft += 100;
	};
	// style scroll arrows on first render
	useEffect(() => {
		updateArrowClass(setShowLeft, setShowRight, "relevance", "comments");
		setTimeout(() => {
			console.log(document.getElementById("limn"));
		}, 200);
	}, []);

	// style scroll arrows onScroll and onResize
	useEffect(() => {
		const FilterBar = filterBar.current;
		FilterBar.addEventListener("scroll", () => {
			console.log("bil");
			handleEvent(setShowLeft, setShowRight, "relevance", "comments");
		});
		window.addEventListener("resize", () => {
			handleEvent(setShowLeft, setShowRight, "relevance", "comments");
		});

		return () => {
			FilterBar.removeEventListener("scroll", () => {
				console.log("bil");
				handleEvent(setShowLeft, setShowRight, "relevance", "comments");
			});
			window.addEventListener("resize", () => {
				handleEvent(setShowLeft, setShowRight, "relevance", "comments");
			});
		};
	}, []);
	console.log("rendered");
	return (
		<div className="filter-bar-container">
			<div ref={filterBar} className="filter-bar" id="filter-bar">
				<div className={`arrow left ${showLeft ? "show" : "hide"}`}>
					<div className="arrow-button" id="left-arrow" onClick={handleScrollLeft}>
						<InlineIcon icon={arrowIosBackOutline} />
					</div>
				</div>

				<FilterButtons />

				<div className={`arrow right ${showRight ? "show" : "hide"}`} id="limn">
					<div className="arrow-button" data-testid="right-arrow" onClick={handleScrollRight}>
						<InlineIcon icon={arrowIosForwardOutline} />
					</div>
				</div>
			</div>
		</div>
	);
};
