import React, { useEffect, useState } from "react";

import "./FilterBar.css";
import { styleArrowsToDisplayNone, updateArrowStyle } from "./FilterBarUtils";
import FilterButtons from "../FilterButtons/FilterButtons";

import { InlineIcon } from "@iconify/react";

import arrowIosForwardOutline from "@iconify-icons/eva/arrow-ios-forward-outline";
import arrowIosBackOutline from "@iconify-icons/eva/arrow-ios-back-outline";

export const FilterBar = () => {
	const [styleRightArrow, setStyleRightArrow] = useState({});
	const [styleLeftArrow, setStyleLeftArrow] = useState({});

	let [rerender, setRerender] = useState(0); // this state is created to trigger a new render

	const handleScrollLeft = () => {
		document.getElementById("filter-bar").scrollLeft -= 100;

		setRerender(rerender + 1);

		styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);
	};

	const handleScrollRight = () => {
		document.getElementById("filter-bar").scrollLeft += 100;

		styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);

		setRerender(rerender + 1);
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
		}, 100);

		window.addEventListener("scroll", () => {
			console.log("scrolled");
			setRerender(rerender + 1);

			updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
		});
		window.addEventListener("resize", () => {
			console.log("resized");
			setRerender(rerender + 1);

			updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
		});

		return () => {
			clearTimeout(timeOut);
			window.removeEventListener("scroll", () => {
				console.log("scrolled");
				setRerender(rerender + 1);

				updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
			});
			window.removeEventListener("resize", () => {
				console.log("resized");
				setRerender(rerender + 1);

				updateArrowStyle(setStyleLeftArrow, setStyleRightArrow);
			});
		};
	}, [setStyleLeftArrow, setStyleRightArrow, setRerender, rerender]);

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
