import React from "react";
import { FilterBar } from "./FilterBar";
import { jest } from "@jest/globals";
import { render, fireEvent, screen } from "../../app/test-utils/test-utils.js";
import { filterUpdated } from "../posts/postsSlice";
import { testRender, makeTestStore } from "./testUtils";

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

describe("FilterBar", () => {
	it("should match the snapshot", () => {
		const store = makeTestStore();
		const { container } = testRender(<FilterBar />, { store });

		expect(container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		const store = makeTestStore();
		testRender(<FilterBar />, { store });
	});

	it("should render Relevance button as the default selected filter", () => {
		const store = makeTestStore();
		const { getByText } = testRender(<FilterBar />, { store });

		const relevanceFilterButton = getByText("Relevance");

		expect(relevanceFilterButton.className).toBe("filter-button selected");
	});

	it("should be able to select any button as the selected filter and one at a time", () => {
		const store = makeTestStore();

		const { getByText } = testRender(<FilterBar />, { store });

		const relevanceFilterButton = getByText("Relevance");
		const hotFilterButton = getByText("Hot");
		const newFilterButton = getByText("New");
		const commentsFilterButton = getByText("Comments");
		const topFilterButton = getByText("Top");

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button selected");

		fireEvent.click(hotFilterButton);

		expect(hotFilterButton.className).toBe("filter-button selected");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(newFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button selected");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(commentsFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button selected");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(topFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button selected");
		expect(relevanceFilterButton.className).toBe("filter-button false");

		fireEvent.click(relevanceFilterButton);

		expect(hotFilterButton.className).toBe("filter-button false");
		expect(newFilterButton.className).toBe("filter-button false");
		expect(commentsFilterButton.className).toBe("filter-button false");
		expect(topFilterButton.className).toBe("filter-button false");
		expect(relevanceFilterButton.className).toBe("filter-button selected");
	});

	it("should render Relevance button as the default selected filter", () => {
		const store = makeTestStore();
		const { getByText } = testRender(<FilterBar />, { store });

		const hotFilterButton = getByText("Hot");
		fireEvent.click(hotFilterButton);

		expect(store.dispatch).toHaveBeenCalledWith(filterUpdated("hot"));
	});
});
