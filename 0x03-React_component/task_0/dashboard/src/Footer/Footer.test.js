import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct year and footer copy", () => {
    const wrapper = shallow(<Footer />);
    const year = getFullYear();
    const footerCopy = getFooterCopy();
    expect(wrapper.text()).toContain(`Copyright ${year} - ${footerCopy}`);
  });
});
