import React from "react";
import PostsSkeleton from "./PostsSkeleton";
import { jest } from "@jest/globals";
import { render, makeTestStore, fireEvent, screen } from "../testUtils";

let store;
describe("PostsSkeleton", () => {
	beforeEach(() => {
		store = makeTestStore();
	});

	it("should render without crashing", () => {
		render(<PostsSkeleton />, { store });
	});

	it("should match the snapshot", () => {
		const { container } = render(<PostsSkeleton />, { store });
		expect(container).toMatchSnapshot();
	});
});
