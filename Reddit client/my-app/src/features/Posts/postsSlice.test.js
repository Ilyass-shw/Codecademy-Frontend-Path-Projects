import reducer from "./postsSlice";

describe("postsSlice reducer", () => {
	const initialState = {
		searchTerm: "lol",
		posts: [],
		filter: "relevance",
		firstFilter: "relevance",
		lastFilter: "comments",
		status: "idle",
		error: null,
	};
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});
});
