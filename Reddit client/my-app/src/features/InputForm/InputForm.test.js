import { jest } from "@jest/globals";
import { render, makeTestStore, screen } from "../testUtils/testUtils";
import React from "react";
import { InputForm } from "./InputForm.js";
import { fetchPosts, searchTermSet } from "../posts/postsSlice";
import userEvent from '@testing-library/user-event'




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

	it("should render without crashing", () => {
		render(<InputForm />, { store });
	});

	it("should match the snapshot", () => {
		const { container } = render(<InputForm />, { store });

		expect(container).toMatchSnapshot();
	});


	it("should have an empty initial value for input ", () => {
		 render(<InputForm />, { store });
		 const input = screen.getByPlaceholderText('Search')
		 expect(input.value).toBe('')

	});

	it("should not dispatch anything when clicked without defined term", () => {
		render(<InputForm />, { store });
		 const input = screen.getByPlaceholderText('Search')
		 expect(input.value).toBe('')
		const submitButton = screen.getByTestId("search-button");
		expect(store.dispatch).toBeCalledTimes(0);

		userEvent.click(submitButton)
		expect(store.dispatch).toBeCalledTimes(0);

	});

	
	// it("should render without crashing", () => {});
});
