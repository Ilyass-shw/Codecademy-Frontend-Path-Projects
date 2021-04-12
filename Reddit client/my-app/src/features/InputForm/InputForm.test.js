import { jest } from "@jest/globals";
import { fireEvent, waitForElement } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
//
import { render } from "../../app/test-utils/test-utils.js";

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
