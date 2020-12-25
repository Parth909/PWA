import React from "react";
import { shallow, mount, render } from "enzyme";
import Card from "./Card";
import toJson from "enzyme-to-json";
// Enzyme allows us to render components in a test environment

// shallow will shallowly render only that component, like it will render only Card component
// if Card component contains other nested Components those will not be rendered
// allows us to perform Unit test

it("Expect to render card component", () => {
  expect(toJson(shallow(<Card />))).toMatchSnapshot();
});

// MOUNT :- A method that re-mounts the component, if it is not currently mounted. This can be used to simulate a component going through an unmount/mount lifecycle.

// RENDER :- It is a inbetween method of Shallow & Mount. It doesn't need the full DOM like Mount but it does render the Children which shallow can't do
