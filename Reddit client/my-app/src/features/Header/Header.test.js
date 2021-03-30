import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import { jest } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";

jest.mock("@iconify/react", () => {
	return { InlineIcon: () => <p>InlineIcon mock</p> };
});
jest.mock("../InputForm/InputForm.js", () => {
	return { InputForm: () => <p>InputForm mock</p> };
});

jest.mock("@iconify-icons/akar-icons/reddit-fill", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("@iconify-icons/bx/bxs-video-plus", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("@iconify-icons/fe/app-menu", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("@iconify-icons/mdi/bell", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

jest.mock("@iconify-icons/akar-icons/arrow-left", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});
jest.mock("@iconify-icons/fluent/search-16-filled", () => {
	return {
		default: () => {
			return "rock";
		},
	};
});

const mockStore = configureStore([]);

describe("Header", () => {
	let store;

	beforeEach(() => {
		store = mockStore({});

		store.dispatch = jest.fn();
	});

	it("should match the snapshot", () => {
		const { container } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
		expect(container).toMatchSnapshot();
	});

	it("should render without crashing", () => {
		render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
	});

	it("should render InputForm when window-width > 460", () => {
		global.innerWidth = 461;
		const { getByText } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
		getByText("InputForm mock");
	});

	it("should not render InputForm on window-width < 460", () => {
		global.innerWidth = 459;
		render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
		const InputForm = screen.queryByText("InputForm mock");
		expect(InputForm).not.toBeInTheDocument(); // it doesn't exist
	});

	it("should render InputForm and go-back-button when clicking on search button on window-width < 460", () => {
		global.innerWidth = 459;
		const { getByTestId } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
        const MobileSearchButton = getByTestId('mobile-search-button')
        fireEvent.click(MobileSearchButton)
		
        const InputForm = screen.queryByText("InputForm mock");
		expect(InputForm).toBeInTheDocument()

        const GoBackButton = screen.queryByTestId("go-back-button");
        expect(GoBackButton).toBeInTheDocument()

	});

	it("should make InputForm disappear and rerender mobile-search-button and reddit-logo when clicking on go-back-button on window-width < 460", () => {
		global.innerWidth = 459;
		const { getByTestId } = render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
        let MobileSearchButton = getByTestId('mobile-search-button')
        fireEvent.click(MobileSearchButton)

        let GoBackButton = screen.queryByTestId("go-back-button");		
		fireEvent.click(GoBackButton)

		MobileSearchButton = getByTestId('mobile-search-button')
		expect(MobileSearchButton).toBeInTheDocument()

		const redditLogo = getByTestId('reddit-logo')
		expect(redditLogo).toBeInTheDocument()

	});
});
