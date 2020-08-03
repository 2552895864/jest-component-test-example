import React from "react";
import { configure, shallow } from "enzyme";
import Hello from "./index";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Hello component", () => {
  const userName = "Spiderman";

  it("Render a greeting to the correct username.", () => {
    const wrapper = shallow(<Hello userName={userName} />);
    expect(
      wrapper
        .find(".greeting")
        .text()
        .trim()
    ).toBe(`Hello, ${userName}!`);
  });
});
