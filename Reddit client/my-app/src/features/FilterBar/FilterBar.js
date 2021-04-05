import React, { useEffect, useState, useRef } from "react";

import "./FilterBar.css";
import { handleEvent, updateArrowStyle } from "./FilterBarUtils";
import FilterButtons from "../FilterButtons/FilterButtons";

import { InlineIcon } from "@iconify/react";

import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

export const FilterBar = () => {
	const [styleRightArrow, setStyleRightArrow] = useState({});
	const [styleLeftArrow, setStyleLeftArrow] = useState({});

	const filterBar = useRef();

	const handleScrollLeft = () => {
		filterBar.current.scrollLeft -= 100;
	};

	const handleScrollRight = () => {
		filterBar.current.scrollLeft += 100;
	};
	// style scroll arrows on first render
	useEffect(() => {
		updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
		setTimeout(() => {
			console.log(document.getElementById("limn"));
		}, 200);
	}, []);

	// style scroll arrows onScroll and onResize
	useEffect(() => {
		const FilterBar = filterBar.current;
		FilterBar.addEventListener("scroll", () => {
			console.log("bil");
			handleEvent(setStyleLeftArrow, setStyleRightArrow);
		});
		window.addEventListener("resize", () => {
			handleEvent(setStyleLeftArrow, setStyleRightArrow);
		});

		return () => {
			FilterBar.removeEventListener("scroll", () => {
				handleEvent(setStyleLeftArrow, setStyleRightArrow);
			});
			window.removeEventListener("resize", () => {
				handleEvent(setStyleLeftArrow, setStyleRightArrow);
			});
		};
	}, []);

	return (
		<div className="filter-bar-container">
			<div ref={filterBar} className="filter-bar" id="filter-bar">
				<div className="arrow left" style={styleLeftArrow}>
					<div className="arrow-button" id="left-arrow" onClick={handleScrollLeft}>
						<InlineIcon icon={arrowIosBackOutline} />
					</div>
				</div>

				<FilterButtons />

				<div className="arrow right" id="limn" style={styleRightArrow}>
					<div className="arrow-button" data-testid="right-arrow" onClick={handleScrollRight}>
						<InlineIcon icon={arrowIosForwardOutline} />
					</div>
				</div>
			</div>
		</div>
	);
};
