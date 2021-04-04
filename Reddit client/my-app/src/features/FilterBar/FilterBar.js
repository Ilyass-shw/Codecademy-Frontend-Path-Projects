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
		const timeOut = setTimeout(updateArrowStyle(setStyleLeftArrow, setStyleRightArrow), 200);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	// style scroll arrows onScroll and onResize
	useEffect(() => {
		const FilterBar = filterBar.current
		FilterBar.addEventListener("scroll", () => {
			console.log('bil')
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
					<div className="arrow-button" onClick={handleScrollLeft}>
						<InlineIcon icon={arrowIosBackOutline} />
					</div>
				</div>

				<FilterButtons />

				<div className="arrow right" style={styleRightArrow}>
					<div className="arrow-button" onClick={handleScrollRight}>
						<InlineIcon icon={arrowIosForwardOutline} />
					</div>
				</div>
			</div>
		</div>
	);
};
