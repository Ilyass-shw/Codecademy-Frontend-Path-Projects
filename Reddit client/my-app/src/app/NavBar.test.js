import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import NavBar from "./NavBar";

jest.mock("@iconify-icons/bx/bx-menu", ()=>() =><div>mock</div>)
jest.mock("@iconify-icons/entypo/home", ()=>() =><div>mock</div>)
jest.mock("@iconify-icons/ic/sharp-local-fire-department", ()=>() =><div>mock</div>)
jest.mock("@iconify-icons/ic/baseline-subscriptions", ()=>() =><div>mock</div>)
jest.mock("@iconify-icons/ic/baseline-video-library", ()=>() =><div>mock</div>)
describe('NavBar',()=>{
	it("should matche the snapshot", () => {

		const component = render(<NavBar />);
		// console.log(component)
		// expect(container).toMatchSnapshot();
	});
})

