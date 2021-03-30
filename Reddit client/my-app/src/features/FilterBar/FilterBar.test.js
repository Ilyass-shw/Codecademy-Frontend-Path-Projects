import React from "react";
import { FilterBar } from "./FilterBar";
import { Provider } from "react-redux";
import { jest } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";

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

const mockStore = configureStore([]);

describe("FilterBar", () => {
	let store;
	beforeEach(() => {
		store = mockStore();

		store.dispatch = jest.fn();
	});
});
