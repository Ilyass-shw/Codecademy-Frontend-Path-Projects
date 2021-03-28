import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
// import Store from "../../app/store";
import { Provider } from "react-redux";
import postsReducer from "../posts/postsSlice";
import { combineReducers, createStore } from "redux";

function createTestStore() {
	const store = createStore(
		combineReducers({
			posts: postsReducer,
		})
	);
	return store;
}
const store = createTestStore();

jest.mock("@iconify-icons/fluent/search-16-filled", () => () => <div>mock</div>);
jest.mock("react-spring/renderprops", () => () => <div>mock</div>);
jest.mock("react-spring/renderprops", () => () => <div>mock</div>);

describe("InputForm", () => {
	it("should match the snapshot", () => {
		const { container } = render(
			<Provider store={store}>
				<InputForm />
			</Provider>
		);

        console.log(container.outerHTML)
		// const { container } = render(<Provider store={Store}><InputForm /></Provider>);
		expect(container).toMatchSnapshot();
	});

	// it("should render without crashing", () => {
	// const div = document.createElement("div");
	// render(<InputForm />);
	// });
});
