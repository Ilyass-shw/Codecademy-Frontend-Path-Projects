import React, { useState } from "react";
import "./InputForm.css";
// npm install --save-dev @iconify/react @iconify-icons/fluent
import { InlineIcon } from "@iconify/react";
import search16Filled from "@iconify-icons/fluent/search-16-filled";
import { fetchPosts, searchTermSet } from "../posts/postsSlice";
import { useDispatch } from "react-redux";

export const InputForm = () => {
	const dispatch = useDispatch();

	const [term, setTerm] = useState("");
	const [mouseOnSearchButton, setMouseOnSearchButton] = useState(false);

	const handleChange = ({ target }) => {
		setTerm(target.value);
	};

	const handleOnClick = () => {
		dispatch(searchTermSet(term));
		dispatch(fetchPosts());
	};

	return (
		<div className="input">
			<form action="#" className="input-form" autoComplete="off">
				<input type="text" name="search" value={term} onChange={handleChange} placeholder="Search" />
				<button
					className="search-button"
					type="button"
					onMouseEnter={() => {
						setMouseOnSearchButton(true);
					}}
					onMouseLeave={() => {
						setMouseOnSearchButton(false);
					}}
					onClick={handleOnClick}
				>
					<InlineIcon
						icon={search16Filled}
						width="1.22rem"
						height="1.22rem"
						color={mouseOnSearchButton ? "#a3a3a3" : "#6f6f6f"}
					/>
				</button>
			</form>
		</div>
	);
};
