import React from "react";
// npm install --save-dev @iconify/react @iconify-icons/bx
import { InlineIcon } from "@iconify/react";
import bxsRocket from "@iconify-icons/bx/bxs-rocket";
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import fireFilled from "@iconify-icons/ant-design/fire-filled";
// npm install --save-dev @iconify/react @iconify-icons/ic
import sharpNewReleases from "@iconify-icons/ic/sharp-new-releases";
// npm install --save-dev @iconify/react @iconify-icons/bx
// import bxsCommentDetail from "@iconify-icons/bx/bxs-comment-detail";
import "./FilterBar.css";
// npm install --save-dev @iconify/react @iconify/icons-oi
import verticalAlignTop from '@iconify/icons-oi/vertical-align-top';
// npm install --save-dev @iconify/react @iconify/icons-icons8
import commentsIcon from '@iconify/icons-icons8/comments';



export const FilterBar = () => {
	return (
		<div className="filter-bar">
			<button className="filter-button">
				<InlineIcon icon={bxsRocket} /> Relevance
			</button>
			<button className="filter-button">
				<InlineIcon icon={fireFilled} /> Hot
			</button>
			<button className="filter-button">
				<InlineIcon icon={sharpNewReleases} /> New
			</button>
			<button className="filter-button">
				<InlineIcon icon={verticalAlignTop} width='.6rem' height='.6rem'/> Top
			</button>
			<button className="filter-button">
				<InlineIcon icon={commentsIcon} /> Comments
			</button>
		</div>
	);
};
