import React from "react";
import PostsList from "./PostsList";
import { jest } from "@jest/globals";
import { render, makeTestStore, fireEvent, screen } from "../testUtils/testUtils";
import { fetchPosts } from "../posts/postsSlice";

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

	it("should fetch posts when rendered ", () => {
		const initialState = {
			status: "idle",
		};
		const name = "posts";
		store = makeTestStore(name, initialState);
		console.log(fetchPosts())

		jest.mock("./postsSlice", () => {
			return { fetchPosts: () => {console.log('wiyéééé')} };
		});

		render(<PostsList />, { store });

		expect(store.dispatch).toHaveBeenCalledTimes(1);
		// expect(fetchPosts).toHaveBeenCalledTimes(2);
		// expect(store.dispatch).toHaveBeenCalledWith(fetchPosts());
	});

	// it("should match the snapshot", () => {
	// 	const { container } = render(<PostsList />, { store });
	// 	expect(container).toMatchSnapshot();
	// });
});
