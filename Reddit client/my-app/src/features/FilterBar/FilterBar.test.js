import React from "react";
import { FilterBar } from "./FilterBar";
import { jest } from "@jest/globals";
import { render, fireEvent, screen } from "../../app/test-utils/test-utils.js";

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
		const { container } = render(<FilterBar />);
		expect(container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		render(<FilterBar />);
	});

	it("should render Relevance button as the default selected filter", () => {
		const { getByText } = render(<FilterBar />);
        const relevanceFilterButton = getByText('Relevance');
        expect(relevanceFilterButton.className).toBe('filter-button selected')
        
	});
});
