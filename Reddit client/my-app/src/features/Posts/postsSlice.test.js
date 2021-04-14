import reducer, { searchTermSet, filterUpdated, firstFilterUpdated, lastFilterUpdated, fetchPosts } from "./postsSlice";
import store from "../../app/store.js";
import { client, getEndPoint, handlefetchedPosts } from "../../api/api";

describe("searchTermSet reducer", () => {
	it("should handle searchTermSet", () => {
		let searchTerm = store.getState().posts.searchTerm;
		expect(searchTerm).toBe("memes");

		store.dispatch(searchTermSet("random"));
		searchTerm = store.getState().posts.searchTerm;
		expect(searchTerm).toBe("random");

		store.dispatch(searchTermSet("shiney"));
		searchTerm = store.getState().posts.searchTerm;
		expect(searchTerm).toBe("shiney");
	});
});

describe("filterUpdated reducer", () => {
	it("should handle filterUpdated", () => {
		let filter = store.getState().posts.filter;
		expect(filter).toBe("relevance");

		store.dispatch(filterUpdated("comments"));
		filter = store.getState().posts.filter;
		expect(filter).toBe("comments");

		store.dispatch(filterUpdated("top"));
		filter = store.getState().posts.filter;
		expect(filter).toBe("top");
	});

	describe("firstFilterUpdated reducer", () => {
		it("should handle firstFilterUpdated", () => {
			let firstFilter = store.getState().posts.firstFilter;
			expect(firstFilter).toBe("relevance");

			store.dispatch(firstFilterUpdated("comments"));
			firstFilter = store.getState().posts.firstFilter;
			expect(firstFilter).toBe("comments");

			store.dispatch(firstFilterUpdated("new"));
			firstFilter = store.getState().posts.firstFilter;
			expect(firstFilter).toBe("new");
		});
	});

	describe("lastFilterUpdated reducer", () => {
		it("should handle lastFilterUpdated", () => {
			let lastFilter = store.getState().posts.lastFilter;
			expect(lastFilter).toBe("comments");

			store.dispatch(lastFilterUpdated("relevance"));
			lastFilter = store.getState().posts.lastFilter;
			expect(lastFilter).toBe("relevance");

			store.dispatch(lastFilterUpdated("hot"));
			lastFilter = store.getState().posts.lastFilter;
			expect(lastFilter).toBe("hot");
		});
	});

	describe("fetchPosts reducer", () => {
		it("should change postFetchingStatus from idle to loading while pending", () => {
			const initialState = {
				searchTerm: "memes",
				postList: [],
				filter: "relevance",
				firstFilter: "relevance",
				lastFilter: "comments",
				postFetchingStatus: "idle",
				error: null,
			};
			const newState = reducer(initialState, fetchPosts.pending);
			expect(newState.postFetchingStatus).toBe("Loading");
		});
	});
});
