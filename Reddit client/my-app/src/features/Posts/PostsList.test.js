import React from "react";
import PostsList from "./PostsList";
import { jest } from "@jest/globals";
import { render, makeTestStore, fireEvent, screen } from "./testUtils";

let store;
describe("PostsSkeleton", () => {
	beforeEach(() => {
		store = makeTestStore();
	});

	it("should render without crashing", () => {
		render(<PostsList />, { store });
	});

	// it("should match the snapshot", () => {
	// 	const { container } = render(<PostsList />, { store });
	// 	expect(container).toMatchSnapshot();
	// });
});
