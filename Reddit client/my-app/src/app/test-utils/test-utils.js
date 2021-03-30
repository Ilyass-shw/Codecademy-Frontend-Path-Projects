import React from "react";
import { render as rtlRender } from "@testing-library/react";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let Store;
Store = mockStore({});

function render(ui, { initialState, store = Store, ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
