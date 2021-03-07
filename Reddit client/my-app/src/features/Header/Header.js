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
			<h3>
				<InlineIcon icon={redditFill} color={"red"} width="1.5rem" height="1.5rem" /> React
			</h3>
			<InputForm />
			<div className="header-user-features">
				<a href="#">
					<InlineIcon className="user-icon" icon={bxsVideoPlus} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
				<a href="#">
					<InlineIcon className="user-icon" icon={appMenu} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
				<a href="#">
					<InlineIcon className="user-icon" icon={bellIcon} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
				<a href="#">
					<InlineIcon className="user-icon" icon={redditFill} color={"white"} width="1.5rem" height="1.5rem" />
				</a>
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;
