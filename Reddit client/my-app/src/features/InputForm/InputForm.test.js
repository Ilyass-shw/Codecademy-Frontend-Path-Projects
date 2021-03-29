import { jest } from "@jest/globals";
import { render, fireEvent  } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
import { Provider } from "react-redux";
import postsReducer from "../posts/postsSlice";
import { combineReducers, createStore } from "redux";
import configureStore from 'redux-mock-store';


// function createTestStore() {
// 	const store = createStore(
// 		combineReducers({
// 			posts: postsReducer,
// 		})
// 	);
// 	return store;
// }
// const store = createTestStore();

const mockStore =  configureStore([]);


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
	let store;
	let component;

	beforeEach(()=>{
		store = mockStore({});

		 component = render(
			<Provider store={store}>
				<InputForm />
			</Provider>
		);
		store.dispatch = jest.fn();

	})

	it("should match the snapshot", () => {
		
		expect(component.container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		
	});
	
	it("should not dispatch anything when clicked without defined term", () => {
		const submitButton = component.getByTestId("search-button");
		fireEvent.click(submitButton);
		expect(store.dispatch).toBeCalledTimes(0)

	});
it("should render without crashing", () => {
		
	});

});
