import React from "react";
import "./Header.css";
import { InlineIcon } from "@iconify/react";
import redditFill from "@iconify-icons/akar-icons/reddit-fill";
import bxsVideoPlus from "@iconify-icons/bx/bxs-video-plus";
import appMenu from "@iconify-icons/fe/app-menu";
import bellIcon from "@iconify-icons/mdi/bell";
import { InputForm } from "../InputForm/InputForm.js";

const Header = (props) => {
	return (
		<div className="header">
			<div className="reddit-logo">
				<h3>
					<InlineIcon icon={redditFill} color={"red"} width="1.7rem" height="1.7rem" /> React
				</h3>
			</div>

			<InputForm className="inputForm" />
			
			<div className="header-user-features">
				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<InlineIcon className="user-icon" icon={bxsVideoPlus} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<InlineIcon className="user-icon" icon={appMenu} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<InlineIcon className="user-icon" icon={bellIcon} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<InlineIcon className="user-icon" icon={redditFill} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;
