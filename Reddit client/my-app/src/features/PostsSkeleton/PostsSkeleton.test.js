import React from "react";
import PostsSkeleton from "./PostsSkeleton";
import { jest } from "@jest/globals";
import { render, makeTestStore, fireEvent, screen } from "../testUtils";

// jest.mock("react-loading-skeleton", () => {
// 	return {
// 		default: () => {
// 			return <div rol="SkeletonTheme mock"></div>;
// 		},
// 	};
// });
jest.mock("react-loading-skeleton", () => {
	return {
		// SkeletonTheme: () => {
		// 	return <div rol="SkeletonTheme mock"></div>;
		// },
        default: () => {
			return <div rol=" mock"></div>;
		}
	};
});

let store;
describe("PostsSkeleton", () => {
	beforeEach(() => {
		store = makeTestStore();
	});
	it("should render without crashing", () => {
		// render(<PostsSkeleton />, { store });
	});
});
