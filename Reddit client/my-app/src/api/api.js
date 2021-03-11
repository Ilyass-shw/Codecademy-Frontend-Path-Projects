// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNow } from "date-fns";
import millify from "millify";

export async function client(endpoint, { body, ...customConfig } = {}) {
	// const headers = { 'Content-Type': 'application/json' }

	const config = {
		method: body ? "POST" : "GET",
		//   ...customConfig,
		//   headers: {
		//     ...headers,
		//     ...customConfig.headers,
		//   },
	};

	if (body) {
		config.body = JSON.stringify(body);
	}

	let data;
	try {
		const response = await window.fetch(endpoint, config);
		data = await response.json();
		if (response.ok) {
			return data;
		}
		throw new Error(response.statusText);
	} catch (err) {
		return Promise.reject(err.message ? err.message : data);
	}
}

client.get = function (endpoint, customConfig = {}) {
	return client(endpoint, { ...customConfig, method: "GET" });
};

client.post = function (endpoint, body, customConfig = {}) {
	return client(endpoint, { ...customConfig, body });
};

export const getEndPoint = ({ searchTerm }) => {
	return `https://www.reddit.com/search.json?q=${searchTerm}&include_facets=true&limit=20&restrict_sr=true&sort=relevance&t=all`;
};

export const handlefetchedPosts = (response) => {

	return response.data.children.map((post) => {

		let postDate = fromUnixTime(post.data.created_utc);

		postDate = formatDistanceToNow(postDate, { addSuffix: true, includeSeconds: true });
		
		const upvotes = millify(post.data.ups);

		return {
			title: post.data.title,
			img: post.data.rpan_video ? post.data.rpan_video.scrubber_media_url : "",
			upvotes,
			date: postDate,
			author: post.data.author,
			subreddit: post.data.subreddit_name_prefixed,
			subredditIcon: "",
			content: "text1",
			id: post.data.id,
		};
	});
};
