import React from "react";
import PostsList from "./PostsList";
import { jest } from "@jest/globals";
import { render, makeTestStore, fireEvent, screen } from "../testUtils/testUtils";

let store;
describe("PostsSkeleton", () => {
	it("should render first time (with posts.status = idle, in store) without crashing ", () => {
		const initialState = {
			status: "idle",
		};
		const name = "posts";
		store = makeTestStore(name, initialState);
		render(<PostsList />, { store });
	});

	// it("should match the snapshot", () => {
	// 	const { container } = render(<PostsList />, { store });
	// 	expect(container).toMatchSnapshot();
	// });
});
