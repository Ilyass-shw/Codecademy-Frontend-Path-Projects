import React from "react";
import { FilterBar } from "./FilterBar";
import { jest } from "@jest/globals";
import { filterUpdated } from "../posts/postsSlice";
import { render, cleanup, makeTestStore, fireEvent, screen } from "./testUtils";
import { isInViewport } from "./FilterBarUtils";

jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});

jest.mock("@iconify-icons/bx/bxs-rocket", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/ant-design/fire-filled", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/ic/sharp-new-releases", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify/icons-oi/vertical-align-top", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify/icons-icons8/comments", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/eva/arrow-ios-forward-outline", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/eva/arrow-ios-back-outline", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

let store;

describe("FilterBar", () => {
	beforeEach(() => {
		store = makeTestStore();
	});
	afterEach(() => {
		cleanup();
	});

	// it("should match the snapshot", () => {
	// 	const { container } = render(<FilterBar />, { store });
	// 	expect(container).toMatchSnapshot();
	// });

	it("should render without crashing", () => {
		render(<FilterBar />, { store });
	});

	it("should render with 'Relevance' as the default selected filter", () => {
		const { getByText } = render(<FilterBar />, { store });

		const relevanceFilterButton = getByText("Relevance");

		expect(relevanceFilterButton.className).toBe("filter-button selected");
	});

	// it("should be able to select any button as the selected filter and one at a time", () => {
	// 	const { getByText } = render(<FilterBar />, { store });

	// 	const relevanceFilterButton = getByText("Relevance");
	// 	const hotFilterButton = getByText("Hot");
	// 	const newFilterButton = getByText("New");
	// 	const commentsFilterButton = getByText("Comments");
	// 	const topFilterButton = getByText("Top");

	// 	expect(hotFilterButton.className).toBe("filter-button false");
	// 	expect(newFilterButton.className).toBe("filter-button false");
	// 	expect(commentsFilterButton.className).toBe("filter-button false");
	// 	expect(topFilterButton.className).toBe("filter-button false");
	// 	expect(relevanceFilterButton.className).toBe("filter-button selected");

	// 	fireEvent.click(hotFilterButton);

	// 	expect(hotFilterButton.className).toBe("filter-button selected");
	// 	expect(newFilterButton.className).toBe("filter-button false");
	// 	expect(commentsFilterButton.className).toBe("filter-button false");
	// 	expect(topFilterButton.className).toBe("filter-button false");
	// 	expect(relevanceFilterButton.className).toBe("filter-button false");

	// 	fireEvent.click(newFilterButton);

	// 	expect(hotFilterButton.className).toBe("filter-button false");
	// 	expect(newFilterButton.className).toBe("filter-button selected");
	// 	expect(commentsFilterButton.className).toBe("filter-button false");
	// 	expect(topFilterButton.className).toBe("filter-button false");
	// 	expect(relevanceFilterButton.className).toBe("filter-button false");

	// 	fireEvent.click(commentsFilterButton);

	// 	expect(hotFilterButton.className).toBe("filter-button false");
	// 	expect(newFilterButton.className).toBe("filter-button false");
	// 	expect(commentsFilterButton.className).toBe("filter-button selected");
	// 	expect(topFilterButton.className).toBe("filter-button false");
	// 	expect(relevanceFilterButton.className).toBe("filter-button false");

	// 	fireEvent.click(topFilterButton);

	// 	expect(hotFilterButton.className).toBe("filter-button false");
	// 	expect(newFilterButton.className).toBe("filter-button false");
	// 	expect(commentsFilterButton.className).toBe("filter-button false");
	// 	expect(topFilterButton.className).toBe("filter-button selected");
	// 	expect(relevanceFilterButton.className).toBe("filter-button false");

	// 	fireEvent.click(relevanceFilterButton);

	// 	expect(hotFilterButton.className).toBe("filter-button false");
	// 	expect(newFilterButton.className).toBe("filter-button false");
	// 	expect(commentsFilterButton.className).toBe("filter-button false");
	// 	expect(topFilterButton.className).toBe("filter-button false");
	// 	expect(relevanceFilterButton.className).toBe("filter-button selected");
	// });

	// it("should render with the relative filter everytime a new filter button is clicked", () => {
	// 	const { getByText } = render(<FilterBar />, { store });

	// 	const hotFilterButton = getByText("Hot");
	// 	fireEvent.click(hotFilterButton);

	// 	expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("hot"));

	// 	const TopFilterButton = getByText("Top");
	// 	fireEvent.click(TopFilterButton);

	// 	expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("top"));

	// 	const NewFilterButton = getByText("New");
	// 	fireEvent.click(NewFilterButton);

	// 	expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("new"));

	// 	const RelevanceFilterButton = getByText("Relevance");
	// 	fireEvent.click(RelevanceFilterButton);

	// 	expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("relevance"));

	// 	const CommentsFilterButton = getByText("Comments");
	// 	fireEvent.click(CommentsFilterButton);

	// 	expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("comments"));
	// });

	it("should be able to scroll right all the way to the last filter by clicking on right arrow ", () => {
		global.innerWidth = 317;
		const { getByTestId, getByText } = render(<FilterBar />, { store });
		const rightArrow = getByTestId("right-arrow");
		fireEvent.click(rightArrow);
		fireEvent.click(rightArrow);
		const lastFilterButton = getByText("Comments");

		expect(isInViewport(lastFilterButton)).toBeTruthy();
	});

	// it("should be able to scroll back left all the way to the first filter by clicking on left arrow ", () => {
	// 	global.innerWidth = 317;
	// 	const { getByTestId, getByText } = render(<FilterBar />, { store });
	// 	const rightArrow = getByTestId("right-arrow");
	// 	fireEvent.click(rightArrow);
	// 	fireEvent.click(rightArrow);
	// 	const lastFilterButton = getByText("Comments");

	// 	expect(isInViewport(lastFilterButton)).toBeTruthy();

	// 	const leftArrow = getByTestId("left-arrow");
	// 	fireEvent.click(leftArrow);
	// 	fireEvent.click(leftArrow);
	// 	const firstFilterButton = getByText("Relevance");

	// 	expect(isInViewport(firstFilterButton)).toBeTruthy();
	// });

	it("should be able to scroll right all the way to the last filter by clicking on right arrow ", async () => {
		global.innerWidth = 317;
		const { getByTestId } = render(<FilterBar />, { store });
		await new Promise((res) => {
			setTimeout(() => {
				// const ArrowLeft = getByTestId("niga");
				const ArrowRight = document.getElementById("limn");
				// console.log(ArrowRight);
				expect(ArrowRight).toHaveAttribute('style');
				// expect(ArrowLeft).toHaveAttribute('style');

				res();
			}, 2000);
		});
	});

	// it("should always hide left arrow at the first render",  () => {

	// 	let { getByTestId, getByText, unmount } = render(<FilterBar />, { store });
	// 	const leftArrow = getByTestId("left-arrow");
	// 	fireEvent.click(leftArrow);
	// 	fireEvent.click(leftArrow);
	// 	await new Promise((res) => {
	// 		setTimeout(() => {
	// 			// const leftArrow = getByTestId("left-arrow");
	// 			const parentArrowLeft = document.getElementById("niga");
	// 			expect(parentArrowLeft.getAttribute('style')).toEqual({ display: "none" });
	// expect(parentArrowLeft).toHaveStyle(`display : flex`);
	// 		res();
	// 	}, 900);
	// });
	// unmount();
	// global.innerWidth = 317;
	// const { getByTestId: getByTestId2 } = render(<FilterBar />, { store });
	// const leftArrow2 = getByTestId2("left-arrow");
	// setTimeout(() => {
	// 	expect(leftArrow2.parentElement).toHaveStyle(`display : flex`);
	// }, 3000);
	// }, 30000);

	// it("should hide left arrow when first filter button is in port view and make it visible when it is not in port view ", () => {});
});