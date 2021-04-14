import reducer, { searchTermSet, filterUpdated, firstFilterUpdated, lastFilterUpdated } from "./postsSlice";
import store from "../../app/store.js";

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
		it("should handle filterUpdated", () => {
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
});
