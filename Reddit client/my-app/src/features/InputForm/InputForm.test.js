import { jest } from "@jest/globals";
import { render, makeTestStore, fireEvent, screen } from "../testUtils/testUtils";
import React from "react";
import { InputForm } from "./InputForm.js";
//

jest.mock("@iconify-icons/fluent/search-16-filled", () => {
	return {
		default: "search16FilledMock",
	};
});

jest.mock("react-spring/renderprops", () => {
	return {
		Transition: ({ children, enter }) => {
			return <div data-testid="Transition">{children("InputForm")(enter)}</div>;
		},
	};
});

jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});
let store;
describe("InputForm", () => {
	beforeEach(() => {
		store = makeTestStore();
	});

	it("should match the snapshot", () => {
		const { container } = render(<InputForm />, { store });

		expect(container).toMatchSnapshot();
	});

	// it("should render without crashing", () => {});

	// it("should not dispatch anything when clicked without defined term", () => {
	// 	const submitButton = component.getByTestId("search-button");
	// 	fireEvent.click(submitButton);
	// 	// expect(store.dispatch).toBeCalledTimes(0);
	// });
	// it("should render without crashing", () => {});
});
