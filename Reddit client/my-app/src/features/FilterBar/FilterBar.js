import React, { useEffect, useState } from "react";

import "./FilterBar.css";
import { styleArrowsToDisplayNone, updateArrowStyle } from "./FilterBarUtils";
import FilterButtons from "../FilterButtons/FilterButtons";

import { InlineIcon } from "@iconify/react";

import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";
import useWindowDimensions from "../Helper/UseWindowDimensions";

export const FilterBar = () => {
	const [styleRightArrow, setStyleRightArrow] = useState({});
	const [styleLeftArrow, setStyleLeftArrow] = useState({});

	const { width } = useWindowDimensions(); // this includes resize event listener

	let [rerender, setRerender] = useState(width); //this state is to trigger a new render when window.dimension changes

	const handleScrollLeft = () => {
		document.getElementById("filter-bar").scrollLeft -= 100;

		styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);

		setRerender(rerender + width);
	};

	const handleScrollRight = () => {
		document.getElementById("filter-bar").scrollLeft += 100;

		styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);

		setRerender(rerender + width);
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
		}, 200);

		return () => {
			clearTimeout(timeOut);
		};
	}, [setStyleLeftArrow, setStyleRightArrow, rerender, width]);

	return (
		<div className="filter-bar-container">
			<div className="filter-bar" id="filter-bar">
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
