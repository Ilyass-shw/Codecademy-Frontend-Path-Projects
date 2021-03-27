import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import { InputForm } from "./InputForm.js";
import store from "../../app/store";
import { Provider } from "react-redux";

jest.mock("@iconify-icons/fluent/search-16-filled", () => () => <div>mock</div>);
jest.mock("react-spring/renderprops", () => () => <div>mock</div>);

describe("InputForm", () => {
	it("should match the snapshot", () => {
		const { container } = render(
			// <React.StrictMode>
				// <Provider store={store}>
					<InputForm />
				// </Provider>
			// </React.StrictMode>
		);
		expect(container).toMatchSnapshot(); 
	});

	// it("should render without crashing", () => {
		// const div = document.createElement("div");
		// render(<InputForm />);
	// });
});
