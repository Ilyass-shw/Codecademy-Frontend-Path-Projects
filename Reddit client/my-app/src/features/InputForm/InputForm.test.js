import { jest } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
// 
import { render } from "../../app/test-utils/test-utils.js";

// function createTestStore() {
// 	const store = createStore(
// 		combineReducers({
// 			posts: postsReducer,
// 		})
// 	);
// 	return store;
// }
// const store = createTestStore();

// const mockStore = configureStore([]);

jest.mock("@iconify-icons/fluent/search-16-filled", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("react-spring/renderprops", () => {
	function renderPropsComponent(children) {
		return <div>{children}</div>;
	}
	return {
		Transition: (props) => {
			return renderPropsComponent(props.children);
		},
	};
});
jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});

describe("InputForm", () => {
	// let store;
	let component;

	beforeEach(() => {

		component = render(
				<InputForm />
		);
	});

	it("should match the snapshot", () => {
		expect(component.container).toMatchSnapshot();
	});

	it("should render without crashing", () => {});

	it("should not dispatch anything when clicked without defined term", () => {
		const submitButton = component.getByTestId("search-button");
		fireEvent.click(submitButton);
		// expect(store.dispatch).toBeCalledTimes(0);
	});
	it("should render without crashing", () => {});
});
