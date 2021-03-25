import { render } from "@testing-library/react";
import React from "react";
// import { NavBar } from "./NavBar.js";

test("<NavBar/> matches snapshot", ()=>{
    const component = render (
		<div className="sideNav">
			<ul>
				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
					<li>icon</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
                    <li>icon</li>
					<li>Home</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
                <li>icon</li>
					<li>Trending</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
                <li>icon</li>
					<li>Subscriptions</li>
				</a>

				<a href="www.youtube.com/watch?v=3oUu7N65s6I&t=1860s">
                    <li>icon</li>
					<li>Library</li>
				</a>
			</ul>
		</div>
	);
console.log(component.container)
    expect(component.container).toMatchSnapshot()
})