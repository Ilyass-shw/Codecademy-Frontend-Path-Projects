import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
import store from "../../app/store";
import { Provider } from "react-redux";
import postsReducer from "../posts/postsSlice";
import { combineReducers, createStore } from "redux";

// function createTestStore() {
// 	const store = createStore(
// 		combineReducers({
// 			posts: postsReducer,
// 		})
// 	);
// 	return store;
// }
// const store = createTestStore();

jest.mock("@iconify-icons/fluent/search-16-filled", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("react-spring/renderprops", () => {
	return { Transition: () => <div className="mocking-Transition"></div> };
});
jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});

describe("InputForm", () => {
	it("should match the snapshot", () => {
		const { container } = render(
			<Provider store={store}>
				<InputForm />
			</Provider>
		);
		expect(container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		render(
			<Provider store={store}>
				<InputForm />
			</Provider>
		);
	});
});
