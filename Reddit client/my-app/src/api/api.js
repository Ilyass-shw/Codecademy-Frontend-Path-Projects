// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
import React from "react";
import fromUnixTime from "date-fns/fromUnixTime";
import { formatDistanceToNow } from "date-fns";
import millify from "millify";
import im from "../features/posts/imgs/icons/background_photo_desktop.webp";

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

// ============= ============= ============= ============= =============

export const getEndPoint = ({ searchTerm, filter }) => {
	return `https://www.reddit.com/search.json?q=${searchTerm}&limit=20&restrict_sr=true&sort=${filter}&t=all&show=all`;
};

// ============= ============= ============= ============= =============

export const handlefetchedPosts = (response) => {
	return response.data.children.map((post) => {
		let postDate = fromUnixTime(post.data.created_utc);

		postDate = formatDistanceToNow(postDate, { addSuffix: true, includeSeconds: true });

		const upvotes = millify(post.data.ups);

		let img;

		if (post.data.rpan_video) {
			img = post.data.rpan_video;
		} else if (post.data.thumbnail) {
			img = post.data.thumbnail;
			console.log(`thum: ${img}`);
		}

		return {
			title: post.data.title,
			img,
			upvotes,
			date: postDate,
			author: post.data.author,
			subreddit: post.data.subreddit_name_prefixed,
			id: post.data.id,
		};
	});
};

// ============= ============= ============= ============= =============

export const handleThumbnail = (thubmnailSrc) => {
	let img;
	if (thubmnailSrc) {
		if (thubmnailSrc === "self") {
			return <img src={im} alt="post" className="content-image" />;
		} else if (thubmnailSrc === "spoiler") {
			return <img src={im} alt="post" className="content-image" />;
		} else if (thubmnailSrc === "image") {
			return <img src={im} alt="post" className="content-image" />;
		} else {
			return <img src={thubmnailSrc} alt="post" className="content-image" />;
		}
	}
};
