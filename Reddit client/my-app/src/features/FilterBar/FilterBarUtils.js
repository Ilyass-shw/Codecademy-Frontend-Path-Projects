export const isInViewport = (element) => {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

export const updateArrowStyle = (setStyleLeftArrow, setStyleRightArrow) => {
	if (!isInViewport(document.getElementById("relevance"))) {
		setStyleLeftArrow({ display: "flex" });
	}
	if (!isInViewport(document.getElementById("comments"))) {
		setStyleRightArrow({ display: "flex" });
	}
};

export const styleArrowsToDisplayNone = (setStyleLeftArrow, setStyleRightArrow) => {
	setStyleLeftArrow({ display: "none" });
	setStyleRightArrow({ display: "none" });
};

export const handleEvent = (setStyleLeftArrow, setStyleRightArrow) => {
	styleArrowsToDisplayNone(setStyleLeftArrow, setStyleRightArrow);
	setTimeout(updateArrowStyle(setStyleLeftArrow, setStyleRightArrow), 200);
};
