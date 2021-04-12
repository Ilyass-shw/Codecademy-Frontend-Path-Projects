import { jest } from "@jest/globals";
import { fireEvent, waitForElement } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
//
import { render } from "../../app/test-utils/test-utils.js";
import { Transition } from "react-transition-group";

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
		default: "search16FilledMock",
	};
});

// jest.mock("react-spring/renderprops", () => {
// 	const NewHOC =(PassedComponent)=>{
// 		return
// 	}
// 	const renderPropsComponent=({koko}) =>{
// 		return <div rol="wiyéé">{koko}</div>;
// 	}
// 	const Transition = ({children}) => {
// 		const chilf = children()
// 		return <div>{chilf}</div>

// 	}
// 	return {
// 		Transition
// 			// console.log(props.children);
// 			// return
// 			// <div rol="wiyéé">{props.children}</div>;
// 		// },
// 	};
// });

jest.mock("react-spring/renderprops", () => {
	return {
		Transition: ({ items, keys, children, enter }) => {

			return <div data-testid="Transition">{children("InputForm")(enter)}</div>;
		},
	};
});
// Transition.mockImplementation(({ children }) => <div data-testid="Transition">{children}</div>)

jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});

describe("InputForm", () => {
	// let store;
	let component;

	beforeEach(() => {
		component = render(<InputForm />);
	});

	it("should match the snapshot", async () => {
		await new Promise((res) => {
			setTimeout(() => {
				expect(component.container).toMatchSnapshot();
				res();
			}, 5000);
		});
	}, 30000);

	// it("should render without crashing", () => {});

	// it("should not dispatch anything when clicked without defined term", () => {
	// 	const submitButton = component.getByTestId("search-button");
	// 	fireEvent.click(submitButton);
	// 	// expect(store.dispatch).toBeCalledTimes(0);
	// });
	// it("should render without crashing", () => {});
});
